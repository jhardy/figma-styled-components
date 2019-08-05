import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  margin: 1px 0 1px 0;
  padding: 8px 4px 8px 7px;
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid transparent;
  border-radius: 2px;
  outline: none;
  background-color: #ffffff;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.005em;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:active,
  &:focus {
    padding: 8px 4px 8px 6px;
    color: #000000;
    border: 2px solid #18a0fb;
    border-radius: 2px;
  }

  &::selection {
    color: #000000;
    background-color: rgba(24, 145, 251, 0.3);
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.3);
  }
`;
