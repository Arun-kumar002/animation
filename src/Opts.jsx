import React from "react";

const Opts = () => {
  return (
    <div>
      <select>
        <optgroup label="Level One">
          <option> A.1 </option>
          <optgroup label="Level Two">
            <option> A.B.1 </option>
          </optgroup>
          <option> A.2 </option>
        </optgroup>
      </select>
    </div>
  );
};

export default Opts;
