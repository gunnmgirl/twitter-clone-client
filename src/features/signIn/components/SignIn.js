import React from "react";
import styled from "styled-components";
import { Users, MessageCircle, Search, Twitter } from "react-feather";
import { Modal } from "@malcodeman/react-modal";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundSecondary};
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
  margin: 1.2rem 0;
  color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
`;

const ImageText = styled.p`
  font-size: 1.2rem;
  margin-left: 0.6rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10rem;
`;

const StyledTwitter = styled(Twitter)`
  fill: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
`;

const SignUp = styled.button`
  width: 100%;
  height: 1.8rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  margin-bottom: 0.8rem;
`;

const LogIn = styled.button`
  width: 100%;
  height: 1.8rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  border: 1px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
`;

const StyledModal = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};
  width: 40%;
  height: 90%;
  border: 2px solid ${(props) => props.theme.backgroundSecondary};
  border-radius: 15px;
`;

function SignIn() {
  const [isSignUpOpen, setIsSignUpOpen] = React.useState(false);
  const [isLogInOpen, setIsLogInOpen] = React.useState(false);

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
      <Content>
        <StyledTwitter size="2.4rem" />
        <h1>See what's happening in the world right now</h1>
        <SignUp onClick={() => setIsSignUpOpen(!isSignUpOpen)}>Sign up</SignUp>
        <Modal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)}>
          <StyledModal></StyledModal>
        </Modal>
        <LogIn onClick={() => setIsLogInOpen(!isLogInOpen)}>Log in</LogIn>
        <Modal isOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)}>
          <StyledModal></StyledModal>
        </Modal>
      </Content>
    </MainContainer>
  );
}

export default SignIn;
