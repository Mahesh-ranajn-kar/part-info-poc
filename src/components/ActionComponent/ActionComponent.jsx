import React from 'react';
import { useDispatch } from 'react-redux';
import { addToRow } from '../../app/action';
import { AddNewRow } from '../../util/AppUtil';

import './ActionComponent.css';

export default function ActionComponent() {
  const dispatch = useDispatch();


  // useEffect(() => {
  //   const getInputJson = async () => {
  //     const res = await fetch('http://localhost:4000/inputjson');
  //     const data = await res.json();
  //     setInputJson(data.data);
  //   };
  //   if (inputJson.length === 0) getInputJson();
  // });

  // const addNewRowToFormBody = () => {
  //   dispatch(addToRow(AddNewRow(Math.random())))
  // };

  return (
    <div>
      <button
        className="btn btn-outline-success action_btn"
        onClick={()=>dispatch(addToRow(AddNewRow(Math.random())))}
      >
        Add Row
      </button>
    </div>
  );
}
