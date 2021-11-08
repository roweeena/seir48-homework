import { Component } from 'react';
import axios from 'axios';

import './css/App.css';
import FetchButton from './FetchButton';
import Gallery from './Gallery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      composers: []
    };

    this.fetchPopularComposers = this.fetchPopularComposers.bind(this);
    this.fetchEssentialComposers = this.fetchEssentialComposers.bind(this);
    this.renderFetchButton = this.renderFetchButton.bind(this);
  }

  // TODO: Investigate CORS error when refactoring .fetchComposers with `type` param

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

  fetchEssentialComposers() {
    this.setState({
      loading: true,
      composers: []
    });

    const url = 'https://api.openopus.org/composer/list/rec.json';
    axios(url).then((response) => {
      this.setState({
        composers: response.data.composers,
        loading: false
      });
    });
  }

  renderFetchButton (button) {
    return (
      <FetchButton
        loading={ this.state.loading }
        onClick={ button.onClick }
        value={ button.value }
      />
    )
  }

  render() {
    // When adding more fetch buttons, add them to this array
    const fetchButtons = [
      { value: 'Get popular composers', onClick: this.fetchPopularComposers },
      { value: 'Get essential composers', onClick: this.fetchEssentialComposers }
    ];

    return (
      <div>
        <header>
          <h1>Composers</h1>
          { fetchButtons.map(this.renderFetchButton) }
        </header>
        <Gallery composers={ this.state.composers } />
      </div>
    );
  }
}

export default App;
