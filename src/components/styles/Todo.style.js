import styled, { keyframes } from "styled-components";
import { tertiaryColor, textColor } from "./Variables";

const Entrance = keyframes`
  0% {
		animation-timing-function: ease-in;
		opacity: 0;
		transform: translateY(-10px);
	}

	100% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0px);
	}
`;

export const TodoContainer = styled.div`
  text-decoration: ${(props) =>
    props.todo.complete ? "line-through 2px black" : "none"};
  opacity: ${(props) => (props.todo.complete ? "0.4" : "none")};
  text-align: start;
  border-bottom: 1px solid ${tertiaryColor};
  padding: 1rem 2rem;
  margin-bottom: 3rem;
  display: flex;
  animation-name: ${Entrance};
  animation-duration: 0.3s;
  animation-delay: 0;

  h3 {
    color: ${textColor};
    font-size: 3rem;
    margin-right: auto;
  }

  > svg {
    color: ${(props) => (props.color ? props.color : textColor)};
    margin-top: 0.3rem;
    font-size: 3rem;
    transition: all 0.3s;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: translateY(2px);
    }
  }
`;
