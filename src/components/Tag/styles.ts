import styled from 'styled-components'

export const TagContainer = styled.li`
  display: inline-block;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  padding: 6px 4px;
  font-size: 0.75rem;
  font-weight: bold;
`
