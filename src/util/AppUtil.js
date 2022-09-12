import React from "react";

import SelectBox from "../components/UI/SelectBox/SelectBox";
import TextBox from "../components/UI/TextBox/TextBox";
import TestArea from "../components/UI/TextArea/TextArea";
import Button from "../components/UI/Button/Button";

export const INPUT_JSON = [
  { displayType: "1", key: 1, businessObject: "cc_block", parent: "", url: "" },
  {
    cols: [
      {
        displayType: "1",
        key: 2,
        businessObject: "part_number",
        parent: "cc_block",
        url: "",
      },
      {
        displayType: "1",
        key: 3,
        businessObject: "part_number",
        parent: "cc_block",
        url: "",
        options: [],
      },
      { displayType: "3", key: 4 },
    ],
  },
  { displayType: "1", key: 5 },
  { displayType: "1", key: 6 },
  { displayType: "1", key: 7 },
  { displayType: "2", key: 8 },
  { displayType: "2", key: 9 },
  { displayType: "2", key: 10 },
  { displayType: "4", key: 11, isDisabled: false },
];

export const DISPLAY_TYPE = {
  COMBOBOX: "1",
  TESTAREA: "2",
  TEXTBOX: "3",
  BUTTON: "4",
};

function addUI(obj, key) {
  if (obj.displayType === DISPLAY_TYPE.COMBOBOX) {
    //return <SelectBox />;
    return SelectBox();
  } else if (obj.displayType === DISPLAY_TYPE.TEXTBOX) {
    return TextBox();
  } else if (obj.displayType === DISPLAY_TYPE.TESTAREA) {
    return TestArea();
  } else if (obj.displayType === DISPLAY_TYPE.BUTTON) {
    return Button(obj.isDisabled);
  }
}

export function AddNewRow(key, INPUT_JSONs) {
  let row = [<td>1</td>];
  row = [...row, ...INPUT_JSON]
  return (
    <>
      <tr key={key}>
        {React.Children.toArray(
          row.map((control) => {

            if (control.hasOwnProperty("cols")) {
              return (
                <td>
                  <div className="PartNumber">
                    {
                      control.cols.map((innerControl) =>addUI(innerControl))
                    }
                  </div>
                </td>
              );
            } else {
              return <td>{addUI(control)}</td>;
            }
          })
        )}
      </tr>
    </>
  );
}


