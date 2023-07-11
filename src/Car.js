import React from "react";

class Car extends React.Component {
  //1  called very first
  constructor(props) {
    super(props);
    this.state = { color: "green" };
  }
  // 2 called second
  static getDerivedStateFromProps(props, state) {
    if (props.color !== state.color) {
      return (state.color = "orange");
    }
    return (state.color = "cyan");
  }
  // 4 last called
  componentDidMount() {
    setTimeout(() => this.setState({ color: "yellow" }), 5000);
  }

  // 3 called b
  render() {
    return <h1 style={{ color: this.state.color }}>I Love TATA Cars..</h1>;
  }
}

export { Car };
