import { useEffect, useState } from "react";


import {AddNewRow } from "../../util/AppUtil"

import "./ActionComponent.css";

export default function ActionComponent({setFormBody}) {
  const [inputJson, setInputJson] = useState([]);

  useEffect(() => {

    const getInputJson = async ()=>{
      const res = await fetch("http://localhost:4000/inputjson")
      const data = await res.json();
      setInputJson(data.data);
    }
    if(inputJson.length === 0)
      getInputJson();
  });


  const addNewRowToFormBody = () => {
    setFormBody((prv) => {
      return [...prv, AddNewRow(Math.random(), inputJson)];
    });
  };

  return (
    <div>
      <button
        className="btn btn-outline-success action_btn"
        onClick={addNewRowToFormBody}
      >
        Add Row
      </button>
    </div>
  );
}
