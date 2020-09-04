import React from "react";
import styled from "styled-components";
import { ThumbsUp, ThumbsDown } from "react-feather";
import { useDispatch } from "react-redux";

import { deletePost } from "../actions";

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
  const { post } = props;
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <button onClick={() => dispatch(deletePost({ postId: post._id }))}>
          Delete
        </button>
        <button>Edit</button>
      </Wrapper>
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
