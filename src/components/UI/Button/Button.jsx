function Button(isDisabled) {

  console.log(isDisabled);
  return (
    <>
      <button className="btn btn-outline-danger" disabled={isDisabled}>
        <i className="bi bi-trash3-fill"></i>
      </button>
    </>
  );
}

export default Button;
