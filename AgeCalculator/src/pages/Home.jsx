import React from "react";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 3.4rem;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <Container>
      <Wrapper />
    </Container>
  );
}

export default Home;
