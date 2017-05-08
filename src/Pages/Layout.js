import React, {Component} from 'react';
import logo from './logo.svg';

class Layout extends Component {

  // Create presentation Component. Avoid needlessly creating files for small components
  Header = () => {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>Welcome to React2</h2>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <this.Header/>
        <div className="app-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
