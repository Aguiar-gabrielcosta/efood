import { styled } from 'styled-components'

export const SideBarContainer = styled.div`
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

export const Content = styled.aside`
  position: relative;
  z-index: 1;
  padding: 16px 8px;
  background-color: ${(props) => props.theme.primaryColor};
  max-width: 360px;
  width: 100%;
  overflow-y: auto;
`
