import React from "react";
import styled from "styled-components";
import { Users, MessageCircle, Search } from "react-feather";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  height: 100%;
`;

const Container = styled.div`
  background: url("https://comm-tech.co.uk/wp-content/uploads/2018/08/OTB_Company_Blue.png.img_.fullhd.medium.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 1.4rem 0;
  color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
`;

const ImageText = styled.p`
  font-size: 1.4rem;
  margin-left: 0.6rem;
`;

function SignIn() {
  return (
    <MainContainer>
      <Container>
        <Wrapper>
          <Search size="1.8rem" />
          <ImageText>Follow your interests.</ImageText>
        </Wrapper>
        <Wrapper>
          <Users size="1.8rem" />
          <ImageText>Hear what people are talking about.</ImageText>
        </Wrapper>
        <Wrapper>
          <MessageCircle size="1.8rem" />
          <ImageText>Join the conversation.</ImageText>
        </Wrapper>
      </Container>
      <div></div>
    </MainContainer>
  );
}

export default SignIn;
