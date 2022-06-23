import styled from "styled-components";
import { secondaryColor, tertiaryColor, textColor } from "./Variables";

export const Form = styled.form`
  display: block;
  margin-bottom: 5rem;
`;

export const FormControl = styled.div`
  display: flex;
  justify-content: end;
`;

export const InputButton = styled.button`
  border: none;
  border-radius: 10rem;
  background-color: transparent;
  transition: all 0.3s;
  outline: none;

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(2px);
  }

  > svg {
    font-size: 4rem;
    margin-top: 0.5rem;
    cursor: pointer;
    color: ${textColor};
  }
`;

export const FormInput = styled.input`
  width: 105%;
  height: 5rem;
  font-family: inherit;
  font-size: 2.5rem;
  padding: 1rem 1rem;
  background-color: ${secondaryColor};
  color: ${textColor};
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 10rem;
  transition: all 0.5s;
  margin-right: -5rem;

  &:focus {
    outline: none;
    background-color: ${tertiaryColor};
    &::placeholder {
      color: ${textColor};
    }
  }
`;
