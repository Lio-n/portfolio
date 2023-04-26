import styled from "styled-components";
import { indieFlower } from "@/utils/fonts";

const Switch = styled.button`
  padding: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: var(--white);
  opacity: 0.7;
  font-size: var(--fs-p);
  font-family: ${indieFlower.style.fontFamily};
  font-weight: 600;
  transition: all 0.2s ease-out;

  &:hover {
    opacity: 1;
  }
`;

export default Switch;
