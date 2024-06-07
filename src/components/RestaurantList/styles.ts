import styled from 'styled-components'

export const RestaurantSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 80px 0 120px 0;

  .container > ul {
    @media (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export const Restaurants = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media (max-width: 1023px) {
    grid-template-columns: 472px;
  }
`
