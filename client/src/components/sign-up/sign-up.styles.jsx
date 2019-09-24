import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    padding: 0 20px;
    margin-top: 20px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;

export const SignUpSpan = styled.span`
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;
