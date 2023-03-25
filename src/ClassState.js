import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      value: "",
    };
  }

  componentDidUpdate() {
    if (!!this.state.loading) {
      setTimeout(() => {
        if (SECURITY_CODE === this.state.value) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
        console.log("validacion");
      }, 2000);
    }
  }
  render() {
    return (
      <div>
        <h2>Delete {this.props.name}</h2>
        <p>Please, write the security code</p>

        {this.state.error && <p>Incorrect code</p>}

        {this.state.loading && <Loading />}
        <input
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
          placeholder="security code"
        />
        <button onClick={() => this.setState({ loading: true })}>
          Check it out
        </button>
      </div>
    );
  }
}

export { ClassState };
