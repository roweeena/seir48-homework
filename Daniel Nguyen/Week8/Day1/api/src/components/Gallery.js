const Gallery = (props) => {
  const renderComposer = function (composer) {
    return (
      <div className="composer-icon" key={ composer.id }>
        <p>{ composer.complete_name }</p>
        <img src={ composer.portrait } alt={ composer.complete_name } />
      </div>
    )
  };

  return (
    <div>
      { props.composers.map(renderComposer) }
    </div>
  );
};

export default Gallery;
