import React from "react";
import camera from "../images/camera.png"; // gives image path
import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");
console.log(client);

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="App">
        <header id="root">{content}</header>
      </div>
    );
  }
};

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div className="App-header">
        <div className="home_image">
          <img src={camera} alt="camera" />
        </div>
        <h1>Picha</h1>
        <div>A Distributed Photo Album</div>
      </div>
    );
  }
};

exports.FundAccount = class extends React.Component {
  render() {
    const { bal, standardUnit, defaultFundAmt, parent } = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type="number"
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({ amt: e.currentTarget.value })}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
};

exports.DeployerOrAttacher = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      hash: null,
      comment:"",
      progress:0
    };
  }

  // update target file
  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  // upload to IPFS
  upload = async (event) => {
    event.preventDefault();
    console.log("uploading");
    console.log(await client.version());

    let hash = await client.add(this.state.selectedFile, {
      progress: (prog) => {
        this.setState({progress:prog/this.state.selectedFile.size *100});
        console.log(`received: ${prog}`)
      },
    });
    console.log(hash.path);
    this.setState({ hash: hash.path });
    this.props.parent.addPhoto(hash,this.state.comment)
  };

  render() {
    const { acc, parent } = this.props;
    return (
      <div>
        {/* Please select a role:
        <br />
        <p>
          <button onClick={() => parent.selectDeployer()}>Deployer</button>
          <br /> Set the wager, deploy the contract.
        </p>
        <p>
          <button onClick={() => parent.selectAttacher()}>Attacher</button>
          <br /> Attach to the Deployer's contract.
        </p> */}
        <div className="app__header">
          <div className="app__headerWrapper">
            <img src={camera} alt="camera" width={60} />
            <h1> Picha </h1>
            {acc ? (
              <button
                className="text__button"
                onClick={() => window.location.reload()}
              >
                Disconnect
              </button>
            ) : (
              <div className="app__headerButtons">
                <button
                  className="primary__button"
                  onClick={() => window.location.reload()}
                >
                  Connect
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="timeline">
          <form className="imageUpload" onSubmit={this.upload}>
            <input type="text" placeholder="Enter a comment..." onChange={(e) => this.setState({ comment: e.target.value })} />
            <div className="uploadCapBtn">
              <input
                className="uploadCap"
                type="file"
                onChange={this.onFileChange}
              />
              <button
                className="primary__button uploadBtn"
              >
                Save
              </button>
            </div>
            <progress className="progress" value={this.state.progress} max="100" />
          </form>

          <div className="post">
            {/* Image */}
            <img
              className="post__image"
              src={`https://ipfs.io/ipfs/${this.state.hash}`}
              alt=""
            />
            {/* List of comments */}
            {
              <div className="post__comments">
                <p className="picha_font">
                  {this.state.comment}
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
};

export default exports;
