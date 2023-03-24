import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  render() {
    return (
      <div>
        <h2>Delete {this.props.name}</h2>
        <p>Please, write the security code</p>

        {this.state.error && <p>Incorrect code</p>}
        <input type="text" placeholder="security code" />
        <button
          onClick={() => this.state((prevState) => ({ error: !prevState }))}
        >
          Check it out
        </button>
      </div>
    );
  }
}

export { ClassState };
