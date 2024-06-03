import styled from 'styled-components'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: flex-end;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  &.is-open {
    display: flex;
  }
`

export const CartContent = styled.aside`
  position: relative;
  z-index: 1;
  padding: 16px 8px;
  background-color: ${(props) => props.theme.primaryColor};
  max-width: 360px;
  width: 100%;
  overflow-y: auto;
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
