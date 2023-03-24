import React, { useEffect } from "react";
import { useState } from "react";

const UseState = ({ name }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!!loading) {
      setTimeout(() => {
        console.log("Validacion");
        setLoading(false);
      }, [2000]);
    }
  }, [loading]);

  return (
    <div>
      <h2>Delete {name}</h2>
      <p>Please, write the security code</p>

      {error && <p>Incorrect code</p>}

      <input type="text" placeholder="security code" />
      <button onClick={() => setLoading((prevState) => !prevState)}>
        Check it out
      </button>
    </div>
  );
};

export { UseState };
