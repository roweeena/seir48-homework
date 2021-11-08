import { Component } from 'react';
import axios from 'axios';

import './css/App.css';
import Loading from './Loading';
import Gallery from './Gallery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      composers: []
    };
    this.fetchPopularComposers = this.fetchPopularComposers.bind(this);
  }

  //
  fetchPopularComposers() {
    this.setState({
      loading: true,
      composers: []
    });

    const url = 'https://api.openopus.org/composer/list/pop.json';
    axios(url).then((response) => {
      this.setState({
        composers: response.data.composers,
        loading: false
      });
    });
  }

  render() {
    const buttonInnerHTML = this.state.loading ? <Loading /> : 'Get popular composers';

    return (
      <div>
        <h1>Composers</h1>
        <button onClick={ this.fetchPopularComposers } >
          { buttonInnerHTML }
        </button>
        <Gallery composers={ this.state.composers } />
      </div>
    );
  }
}

export default App;
