import styled from 'styled-components'

export const CartContainer = styled.div`
  > p.empty-cart {
    color: ${(props) => props.theme.secondaryColor};
    font-size: 1 rem;
    line-height: 1.375rem;
    text-align: center;
    margin-top: 16px;
  }
`

export const CartProduct = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.secondaryColor};
  padding: 8px;
  display: flex;
  gap: 8px;
  margin: 16px 0;

  h3 {
    font-size: 1.125rem;
    font-weight: bold;
  }

  p {
    font-size: 0.875rem;
    margin-top: 16px;
  }

  img.productImg {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  img.remove {
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const CartValues = styled.div`
  color: ${(props) => props.theme.secondaryColor};
  font-size: 0.875rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin: 24px 0 16px 0;
`
