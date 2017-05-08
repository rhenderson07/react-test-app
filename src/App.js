import React, {Component} from 'react';
import Home from './pages/Home';
import Layout from './pages/Layout';

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
