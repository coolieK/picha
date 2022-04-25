import React from 'react';
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import AppViews from './views/AppViews';
import {renderDOM, renderView} from './views/render';
import  "./index.css";
import * as backend from './build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

//reach.setWalletFallback(reach.walletFallback({}));
reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {view: 'ConnectAccount', ...defaults};
    }
    async componentDidMount() {
      const acc = await reach.getDefaultAccount();
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      this.setState({acc, bal});
    }
    
    render() { return renderView(this, AppViews); }
  }

  renderDOM(<App />);