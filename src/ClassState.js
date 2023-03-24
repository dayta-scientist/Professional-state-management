import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: true,
      loading: false,
    };
  }

  componentDidUpdate() {
    if (!!this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
    }
  }
  render() {
    return (
      <div>
        <h2>Delete {this.props.name}</h2>
        <p>Please, write the security code</p>

        {this.state.error && <p>Incorrect code</p>}

        {this.state.loading && <Loading />}
        <input type="text" placeholder="security code" />
        <button
          onClick={() =>
            this.setState((prevState) => ({ loading: !prevState }))
          }
        >
          Check it out
        </button>
      </div>
    );
  }
}

export { ClassState };
