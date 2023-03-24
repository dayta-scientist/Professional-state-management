import React from "react";

class ClassState extends React.Component {
  render() {
    return (
      <div>
        <h2>Delete Class State</h2>
        <p>Please, write the security code</p>
        <input type="text" placeholder="security code" />
        <button>Check it out</button>
      </div>
    );
  }
}

export { ClassState };
