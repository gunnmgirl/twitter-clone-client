import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Twitter } from "react-feather";
import { useDispatch } from "react-redux";

import { login } from "../actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

const StyledTwitter = styled(Twitter)`
  fill: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  width: auto;
  height: 2rem;
  border: 0.03rem solid ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.tertiary};
  border-radius: 3%;
  font-size: 1rem;
  margin: 0.4rem 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.primary};
  width: 40%;
`;

const WarningText = styled.span`
  color: ${(props) => props.theme.warning};
`;

const StyledLabel = styled.label`
  color: ${(props) => props.theme.quaternary};
`;

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 9999px;
  height: 3rem;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.backgroundPrimary};
  margin: 1rem 0;
  font-size: 1rem;
`;

function LogIn() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(login(values, { formik }));
    },
    validationSchema,
  });

  return (
    <Container>
      <StyledTwitter size="2.4rem" />
      <h2>Log in to Twitter</h2>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <WarningText>{formik.errors.email}</WarningText>
        ) : null}
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password ? (
          <WarningText>{formik.errors.password}</WarningText>
        ) : null}
        <StyledButton type="submit" onClick={formik.handleSubmit}>
          Log in
        </StyledButton>
      </StyledForm>
    </Container>
  );
}

export default LogIn;
