import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  font-size: 0.875rem;
  font-weight: bold;
  display: block;
  border: none;
  padding: 4px 8px;
  cursor: pointer;

  &.all-width {
    width: 100%;
  }

  &:disabled {
    background-color: ${(props) => props.theme.buttonDisabledColor};
    color: ${(props) => props.theme.buttonTextDisabledColor};
    cursor: not-allowed;
  }
`
