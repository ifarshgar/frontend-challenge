import React, { Component } from "react";

class GetData extends Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <>loading...</>;
    }

    if (!this.state.person) {
      return <>Didn't get any results from the server!</>;
    }

    return (
      <>
        <div>{this.state.person.id}</div>
        <div>{this.state.person.name}</div>
      </>
    );
  }
}

export default GetData;
