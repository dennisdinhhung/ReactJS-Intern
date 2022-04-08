import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% {
    margin-bottom: 0;
  }

  50% {
    margin-bottom: 1rem;
  }

  100% {
    margin-bottom: 0;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;
