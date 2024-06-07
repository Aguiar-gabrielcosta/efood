import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  padding: 8px;
  color: ${(props) => props.theme.secondaryColor};

  img {
    display: block;
    width: 100%;
    height: 167px;
    object-fit: cover;
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
  min-height: 200px;
`
