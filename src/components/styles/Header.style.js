import styled from "styled-components";
import { textColor } from "./Variables";

export const HeaderContainer = styled.header`
  padding: 100px 0 40px 0;
  text-align: center;
  font-family: "Product Sans Light";
  margin-bottom: 5rem;

  h1 {
    font-size: 7rem;
    color: ${textColor};
    letter-spacing: 0.4rem;
  }
`;
