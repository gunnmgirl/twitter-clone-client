import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { createPost, getPosts } from "../actions";
import { logout } from "../../auth/actions";
import Post from "./Post";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.primary};
`;

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
  padding: 0.4rem 0.4rem;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  border: none;
`;

const StyledImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 0.8rem;
`;

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 9999px;
  width: 5rem;
  height: 2rem;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.backgroundPrimary};
  margin: 1rem 0;
  font-size: 1rem;
`;

const Container = styled.div``;

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const validationSchema = Yup.object().shape({
    content: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: (values) => {
      dispatch(createPost(values, { formik }));
      formik.resetForm();
    },
    validationSchema,
  });

  return (
    <MainContainer>
      <Container>
        <StyledForm onSubmit={formik.handleSubmit}>
          <Wrapper>
            <StyledImage
              src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
              alt="user image"
            />
            <StyledTextarea
              name="content"
              placeholder="What's happening?"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.content}
            />
          </Wrapper>
          <StyledButton type="submit">Tweet</StyledButton>
        </StyledForm>
        <PostsWrapper>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </PostsWrapper>
      </Container>
      <StyledButton
        onClick={() => {
          dispatch(logout());
          localStorage.removeItem("token");
        }}
      >
        Log out
      </StyledButton>
    </MainContainer>
  );
}

export default Posts;
