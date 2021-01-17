import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 70vh;
  justify-content: center;
  width: 100%;
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 9px solid #808080;
  border-right: 9px solid #808080;
  border-bottom: 9px solid #808080;
  border-left: 18px solid #000;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`