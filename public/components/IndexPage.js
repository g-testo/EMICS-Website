import React from 'react';
import { render } from 'react-dom';

export class IndexPage extends React.Component {
  componentDidMount() {
    console.log("Mounted")
  }
  render() {
    return (
      <div className="indexContainer">
        <h1>QUICKSTARTER</h1>
        <h3>Testo Photography Photobook</h3>
        <h3>Testo Photography Multi-Panel Canvas Prints</h3>
        <h3>EMICS SYSTEM</h3>
      </div>
    )
  }
};

export default IndexPage;
