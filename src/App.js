import React, {Component} from 'react';
import Home from './Pages/Home';
import Layout from './Pages/Layout';

import './App.css';

class App extends Component {

  render() {
    return (
      <Layout >
        <Home/>
      </Layout>
    );
  }
}

export default App;
