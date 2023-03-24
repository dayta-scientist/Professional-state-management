import React from "react";

const UseState = ({ name }) => {
  return (
    <div>
      <h2>Delete {name}</h2>
      <p>Please, write the security code</p>
      <input type="text" placeholder="security code" />
      <button>Check it out</button>
    </div>
  );
};

export { UseState };
