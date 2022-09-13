import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromRow } from '../../../app/action';

function Button({isDisabled, keyID}) {
  const dispatch = useDispatch();

  return (
    <>
      <button className="btn btn-outline-danger" disabled={isDisabled}
      onClick={()=>dispatch(removeFromRow(keyID))}
      >
        <i className="bi bi-trash3-fill"></i>
      </button>
    </>
  );
}

export default Button;
