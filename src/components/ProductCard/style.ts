import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  padding: 8px;
  color: ${(props) => props.theme.secondaryColor};

  img {
    display: block;
  }
`

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 8px;
`

export const CardDescription = styled.p`
  font-size: 0.875rem;
  line-height: 22px;
  margin: 8px 0;
`