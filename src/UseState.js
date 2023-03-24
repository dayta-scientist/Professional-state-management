import React from "react";
import { useState } from "react";

const UseState = ({ name }) => {
  const [error, setError] = useState(true);

  return (
    <div>
      <h2>Delete {name}</h2>
      <p>Please, write the security code</p>

      {error && <p>Incorrect code</p>}

      <input type="text" placeholder="security code" />
      <button onClick={() => setError((prevState) => !prevState)}>
        Check it out
      </button>
    </div>
  );
};

export { UseState };
