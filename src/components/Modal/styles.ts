import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.show {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.terciaryColor};
  padding: 32px;
  max-width: 1024px;
  width: 100%;
  z-index: 1;
`

export const CloseButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const ModalProductDetails = styled.div`
  display: flex;
  gap: 24px;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
  }
`
