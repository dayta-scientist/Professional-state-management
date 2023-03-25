import React, { useEffect } from "react";
import { useState } from "react";

const SECURITY_CODE = "paradigma";

const UseState = ({ name }) => {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
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
            confirmed: true,
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

  if (!state.deleted && !state.confirmed) {
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
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Are you sure?</p>
        <button
          onClick={() => {
            setState({
              ...state,
              deleted: true,
            });
          }}
        >
          Yes, eliminate
        </button>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
            });
          }}
        >
          No, I regretted it
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Deleted successfully</p>

        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              deleted: false,
              value: "",
            });
          }}
        >
          Reset, go back
        </button>
      </>
    );
  }
};

export { UseState };
