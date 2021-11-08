import './css/Gallery.css';
import Loading from './Loading';

const Gallery = (props) => {
  const renderComposer = function (composer) {
    return (
      <div className="composer-icon" key={ composer.id }>
        <p>{ composer.complete_name }</p>
        <img src={ composer.portrait } alt={ composer.complete_name } />
      </div>
    )
  };

  const renderGallery = () => {
    return (
      <div className="gallery">
        { props.composers.length > 0 ? props.composers.map(renderComposer) : '(No composers to show)' }
      </div>
    );
  };

  return props.loading ? <Loading /> : renderGallery();
};

export default Gallery;
