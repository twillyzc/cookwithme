import React from "react";

import { Progress, Container } from "./Loader-styles";

class Loader extends React.Component {
  render() {
    return (
      <Container>
        <Progress />
      </Container>
    );
  }
}

export default Loader;
