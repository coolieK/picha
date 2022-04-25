import React from 'react';
import Post from "./PostView";
import ImageUpload from "./ImageUploadView";

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          {content}
        </header>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    const {acc} = this.props;
    return (
      <div className="app">
      <div className="app__header">
        <div className="app__headerWrapper">
        <img src={require('./camera.png')} width="50" />
        <h1>Picha.</h1>
        {console.log(`Account: ${acc}`)}
          {acc ? (
            <div className="app__headerButtons">
            <button className="text__button" onClick={() => {window.location.reload();}}>
              Disconnect
            </button>
            </div>
          ) : (
            <div className="app__headerButtons">
              <button
                className="text__button"
                onClick={() => {window.location.reload();}}
              >
                Connect
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="timeline">
         {acc && <ImageUpload acc={acc} />}
{/* image upload goes here */}
      </div>
    </div>
    )
  }
}



export default exports;