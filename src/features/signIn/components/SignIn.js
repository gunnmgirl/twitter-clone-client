import React from "react";
import styled from "styled-components";
import { Users, MessageCircle, Search, Twitter } from "react-feather";
import { Modal } from "@malcodeman/react-modal";
import * as Yup from "yup";
import { useFormik } from "formik";

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
  background-color: ${(props) => props.theme.secondary};
  width: 40%;
  height: 90%;
  border: 2px solid ${(props) => props.theme.backgroundSecondary};
  border-radius: 15px;
`;

const StyledInput = styled.input`
  width: auto;
  height: 2rem;
  border: 0.03rem solid ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.tertiary};
  border-radius: 3%;
  font-size: 1rem;
  margin: 0.2rem 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  padding-right: 6rem;
  color: ${(props) => props.theme.primary};
`;

function SignIn() {
  const [isSignUpOpen, setIsSignUpOpen] = React.useState(false);
  const [isLogInOpen, setIsLogInOpen] = React.useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 characters long")
      .required("Required"),
    password: Yup.string()
      .min(5, "Must be at least 5 characters long")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("values: ", values);
    },
    validationSchema,
  });

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
          <StyledModal>
            <StyledForm onSubmit={formik.handleSubmit}>
              <label htmlFor="name">Name</label>
              <StyledInput
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.errors.name && formik.touched.name ? (
                <span>{formik.errors.name}</span>
              ) : null}
              <label htmlFor="email">Email</label>
              <StyledInput
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <span>{formik.errors.email}</span>
              ) : null}
              <label htmlFor="password">Password</label>
              <StyledInput
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password ? (
                <span>{formik.errors.password}</span>
              ) : null}
            </StyledForm>
          </StyledModal>
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
