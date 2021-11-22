import { Component } from 'react';

import './css/Gallery.css';
import Loading from './Loading';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      selected: null
    }
  }
  renderComposer(composer) {
    return (
      <div className="composer-icon" key={ composer.id }>
        <p>{ composer.complete_name }</p>
        <img src={ composer.portrait } alt={ composer.complete_name } />
      </div>
    );
  }

  renderGallery() {
    return (
      <div className="gallery">
        { this.props.composers.length > 0 ? this.props.composers.map(this.renderComposer) : '(No composers to show)' }
      </div>
    );
  }

  render() {
    return this.props.loading ? <Loading /> : this.renderGallery();
  }
};

export default Gallery;
