import React from "react";
import styled from "styled-components";
import { ThumbsUp, ThumbsDown } from "react-feather";
import { useDispatch } from "react-redux";
import { Modal } from "@malcodeman/react-modal";
import { useFormik } from "formik";
import * as Yup from "yup";

import { deletePost, editPost } from "../actions";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
  width: 40%;
  height: 40%;
  border: 2px solid ${(props) => props.theme.backgroundSecondary};
  border-radius: 15px;
  padding: 0.6rem 0;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  width: auto;
  height: 5rem;
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
  padding: 1rem 2rem;
  padding-right: 6rem;
  color: ${(props) => props.theme.primary};
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

const Container = styled.div`
  border: 0.1rem solid ${(props) => props.theme.primary};
  border-radius: 5px;
  width: 70%;
  min-height: 7rem;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
  margin: 1rem 0;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 0.1rem solid ${(props) => props.theme.primary};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.4rem 0;
`;

const StyledText = styled.p`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  min-height: 5rem;
  padding: 0.2rem 1rem;
`;

const StyledNumber = styled.span`
  margin-left: 0.2rem;
`;

const Content = styled.div`
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

function Post(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { post } = props;
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    content: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      content: post.content,
    },
    onSubmit: (values) => {
      dispatch(editPost({ postId: post._id, newContent: values.content }));
      setIsOpen(false);
    },
    validationSchema,
  });

  return (
    <Container>
      <Wrapper>
        <button onClick={() => dispatch(deletePost({ postId: post._id }))}>
          Delete
        </button>
        <button onClick={() => setIsOpen(true)}>Edit</button>
      </Wrapper>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <StyledModal>
          <StyledForm onSubmit={formik.handleSubmit}>
            <StyledTextarea
              type="text"
              name="content"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.content}
            />
            <StyledButton type="submit" onClick={formik.handleSubmit}>
              Edit
            </StyledButton>
          </StyledForm>
        </StyledModal>
      </Modal>
      <Content>
        <StyledText>{post.content}</StyledText>
      </Content>
      <Info>
        <Wrapper>
          <ThumbsUp size="20" strokeWidth="1.5" />
          <StyledNumber>{post.upvotes}</StyledNumber>
        </Wrapper>
        <Wrapper>
          <ThumbsDown size="20" strokeWidth="1.5" />
          <StyledNumber>{post.downvotes}</StyledNumber>
        </Wrapper>
      </Info>
    </Container>
  );
}

export default Post;
