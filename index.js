import React from "react";
import MyAlgoConnect from "@reach-sh/stdlib/ALGO_MyAlgoConnect";
import AppViews from "./views/AppViews";
import { renderDOM, renderView } from "./views/render";
import "./index.css";
import * as backend from "./build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
const reach = loadStdlib(process.env);


//reach.setWalletFallback(reach.walletFallback({}));
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "ConnectAccount",
      selectedFile: null,
      hash: null,
    };
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({ acc, bal });

    if (await reach.canFundFromFaucet()) {
      this.setState({ view: "FundAccount" });
    } else {
      this.setState({ view: "DeployerOrAttacher" });
    }
  }

  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({ view: "DeployerOrAttacher" });
  }

  async skipFundAccount() {
    this.setState({ view: "DeployerOrAttacher", ContentView: Deployer });
  }

  async addPhoto(hash,comment) {
    const ctc = this.state.acc.contract(backend);
    this.photoId = 1; // UInt
    this.ipfsHash = hash.toString();;
    this.comment = comment;
    backend.AddPhoto(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    console.log(`ctcInfoStr: ${ctcInfoStr}`)
  }


  render() {
    return renderView(this, AppViews);
  }
}



renderDOM(<App />);
