import { Component } from 'react';

import './css/Gallery.css';
import Loading from './Loading';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      selected: null
    };
  }

  renderComposerButton(composer) {
    return (
      <div className="composer-icon" key={ composer.id }>
        <button>
          <p>{ composer.complete_name }</p>
          <img src={ composer.portrait } alt={ composer.complete_name } />
        </button>
      </div>
    );
  }

  renderGallery() {
    return (
      <div className="gallery">
        { this.props.composers.length > 0 ?
          this.props.composers.map(this.renderComposerButton) :
          '(No composers to show)' }
      </div>
    );
  }

  showComposerInfo() {
    const composer = this.state.selected;
    if (composer) {
      return (
        <div>
          <h3>{ composer.complete_name }</h3>
          <p>Born: { composer.birth.slice(0, 4) }</p>
          <p>Died: { composer.death.slice(0, 4) }</p>
          <p>Period: { composer.epoch }</p>
        </div>
      )
    } else {
      return <div></div>
    }
  }

  render() {
    if (this.props.loading) {
      return <Loading />
    } else {
      return (
        <div>
        { this.renderGallery() }
        { this.showComposerInfo() }
        </div>
      );
    }
  }
};

export default Gallery;
