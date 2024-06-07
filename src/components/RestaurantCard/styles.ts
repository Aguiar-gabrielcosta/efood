import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  max-width: 472px;
  width: 100%;
  height: 100%;

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const CardInfos = styled.div`
  padding: 8px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-top: none;
`

export const CardPrimaryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  font-weight: bold;

  h2 {
    font-size: 1.125rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const CardDescription = styled.div`
  font-size: 0.875rem;
  line-height: 22px;
  margin: 16px 0;
  min-height: 110px;
`

export const CardTags = styled.ul`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`
