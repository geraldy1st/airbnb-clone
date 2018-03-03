import React from 'react';

class Hello extends React.Component {
  render() {
    return <div><h1>Hello {this.props.firstName} {this.props.lastName}!</h1></div>;
  }
}

export default Hello;
