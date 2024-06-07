import styled from 'styled-components'

export const ProductSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 60px 0 120px 0;
`

export const Products = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`
