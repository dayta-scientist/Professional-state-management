import React, { useEffect } from "react";
import { useState } from "react";

const SECURITY_CODE = "paradigma";

const UseState = ({ name }) => {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
  });

  const onChangeValue = (event) => {
    // setValue(event.target.value);
    setState({
      ...state,
      value: event.target.value,
    });
  };

  useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        console.log("Validacion");

        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            loading: false,
            error: false,
          });
        } else {
          setState({
            ...state,
            loading: false,
            error: true,
          });
        }
      }, [2000]);
    }
  }, [state.loading]);

  return (
    <div>
      <h2>Delete {name}</h2>
      <p>Please, write the security code</p>
      {state.loading && !state.error && <p>Loading...</p>}
      {state.error && <p>Incorrect code</p>}
      <input
        type="text"
        placeholder="security code"
        value={state.value}
        onChange={onChangeValue}
      />
      <button
        onClick={() => {
          // setLoading(true);
          setState({
            ...state,
            loading: true,
          });
        }}
      >
        Check it out
      </button>
    </div>
  );
};

export { UseState };
