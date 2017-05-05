import React, {Component} from 'react';
import Header from './Layout/Header';

class Layout extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="app-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
