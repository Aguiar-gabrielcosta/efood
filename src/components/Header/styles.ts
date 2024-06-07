import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header<{ $bgVetor: string }>`
  background-color: ${(props) => props.theme.secondaryColor};
  background-image: url(${(props) => props.$bgVetor});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 64px 0;
  }

  .container > img {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .responsive-none {
    @media (max-width: 650px) {
      display: none;
    }
  }

  .responsive-display {
    display: none;

    @media (max-width: 650px) {
      display: block;
    }
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryColor};
  font-size: 1.125rem;
  font-weight: bold;

  img {
    height: 2rem;
  }
`

export const CartLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.primaryColor};
  font-size: 1.125rem;
  font-weight: bold;
  cursor: pointer;

  img {
    height: 2rem;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  max-width: 540px;
  text-align: center;
  padding: 70px 0 40px 0;
`
