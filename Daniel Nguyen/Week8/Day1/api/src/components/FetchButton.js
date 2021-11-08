const FetchButton = (props) => {
  return (
    <button onClick={ props.onClick } >
      { props.value }
    </button>
  )
};

export default FetchButton;
