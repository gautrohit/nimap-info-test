import React, { useState } from "react";
import Info01 from "./Info01";
import Info02 from "./Info02";
import Info03 from "./Info03";

function DropdownCont() {
  const [dropDownValue, setDropDownValue] = useState("");

  const changeValue = (text) => {
    setDropDownValue(text);
  };
  return (
    <div>
      <div class="dropdown mt-3">
        <button
          class="btn btn-secondary dropdown-toggle"
          title={dropDownValue}
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" onClick={() => changeValue(<Info01 />)}>
            JavaScript
          </a>
          <a class="dropdown-item" onClick={() => changeValue(<Info02 />)}>
            React
          </a>
          <a class="dropdown-item" onClick={() => changeValue(<Info03 />)}>
            Angular
          </a>
        </div>
      </div>
      <div className="mt-5">
        <p>{dropDownValue}</p>
      </div>
    </div>
  );
}

export default DropdownCont;
