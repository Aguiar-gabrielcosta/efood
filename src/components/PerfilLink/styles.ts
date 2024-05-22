import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkContainer = styled(Link)`
  display: inline-block;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  padding: 4px 6px;
  font-size: 0.875rem;
  font-weight: bold;
  text-decoration: none;
`
