import React, { useEffect } from "react";
import { useState } from "react";

const SECURITY_CODE = "paradigma";

const UseState = ({ name }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (!!loading) {
      setTimeout(() => {
        console.log("Validacion");

        if (value === SECURITY_CODE) {
          setLoading(false);
          setError(false);
        } else {
          setLoading(false);
          setError(true);
        }
      }, [2000]);
    }
  }, [loading]);

  return (
    <div>
      <h2>Delete {name}</h2>
      <p>Please, write the security code</p>
      {error && <p>Incorrect code</p>}
      {loading && <p>Cargando ...</p>}
      <input
        type="text"
        placeholder="security code"
        value={value}
        onChange={onChangeValue}
      />
      <button
        onClick={() => {
          setLoading(true);
        }}
      >
        Check it out
      </button>
    </div>
  );
};

export { UseState };
