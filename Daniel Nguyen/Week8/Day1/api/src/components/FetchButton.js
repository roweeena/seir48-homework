import Loading from './Loading';

const FetchButton = (props) => {
  const buttonInnerHTML = props.loading ? <Loading /> : props.value;

  return (
    <button onClick={ props.onClick } >
      { buttonInnerHTML }
    </button>
  )
};

export default FetchButton;
