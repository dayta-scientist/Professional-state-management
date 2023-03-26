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

  // const onChangeValue = (event) => {
  //   // setValue(event.target.value);
  //   setState({
  //     ...state,
  //     value: event.target.value,
  //   });
  // };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    });
  };

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    });
  };

  const onWrite = (newValue) => {
    setState({
      ...state,
      value: newValue,
    });
  };

  const onCheck = () => {
    setState({
      ...state,
      loading: true,
    });
  };

  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
    });
  };

  const onReset = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false,
      value: "",
    });
  };

  useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        console.log("Validacion");

        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
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
          onChange={(event) => {
            onWrite(event.target.value);
          }}
        />
        <button
          onClick={() => {
            onCheck();
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
            onDelete();
          }}
        >
          Yes, eliminate
        </button>
        <button
          onClick={() => {
            onReset();
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
            onReset();
          }}
        >
          Reset, go back
        </button>
      </>
    );
  }
};

export { UseState };
