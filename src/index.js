import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Search from './Components/Search/index'
import Results from './Components/Results/index'
import Layout from './Components/Layout/index'

import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          {/* <p>
            <a href='https://www.petfinder.com/developers/'>Pet finder API</a>
          </p> */}
          <Search />
          <Results />
        </Layout>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));