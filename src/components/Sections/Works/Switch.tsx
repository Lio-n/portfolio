import styled from "styled-components";

const Switch = styled.button`
  padding: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: var(--white);
  opacity: 0.5;
  font-size: var(--fs-p);

  &:hover {
    opacity: 1;
  }
`;

export default Switch;
