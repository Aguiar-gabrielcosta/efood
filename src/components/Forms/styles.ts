import styled from 'styled-components'

export const FormsContainer = styled.div`
  color: ${(props) => props.theme.secondaryColor};
`

export const Form = styled.form`
  margin: 16px 0;
  display: none;
  flex-wrap: wrap;
  justify-content: space-between;

  &.show {
    display: flex;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .buttons-container {
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  p {
    font-size: 0.875rem;
    font-weight: regular;
    line-height: 1.375rem;
    margin: 8px 0;
  }
`

export const InputField = styled.div<{ $maxWidth?: string }>`
  margin: 8px 0;
  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : '100%')};
  width: 100%;

  label {
    display: block;
    font-size: 0.875rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    border: none;
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.inputColor};
    font-size: 0.875rem;
    font-weight: bold;
    padding: 8px;
  }
`
