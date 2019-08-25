import styled from 'styled-components'

const TextAreaFactory = styled.textarea`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1px 0 1px 0;
  min-height: 60px;
  padding: 8px;
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid transparent;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  outline: none;
  background-color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.005em;
  resize: none;


  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }

  &:active,
  &:focus-within {
    color: #000000;
    box-shadow: inset 0 0 0 2px #18a0fb;
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
`

export const TextArea = styled(TextAreaFactory)``
