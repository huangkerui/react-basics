import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component<any> {
  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

ReactDOM.render(<Layout />, document.getElementById('app'));
