import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function SignIn() {
  return (
    <Container>
      <div>Picture</div>
      <div>SignIn</div>
    </Container>
  );
}

export default SignIn;
