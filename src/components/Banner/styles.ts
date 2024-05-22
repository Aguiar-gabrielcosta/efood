import styled from 'styled-components'

export const BannerContainer = styled.div<{ $bgImage: string }>`
  position: relative;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: ${(props) => props.theme.terciaryColor};
  font-size: 2rem;
  padding: 24px 0 32px 0;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
  }

  .container {
    position: relative;
  }
`

export const BannerTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 156px;
`

export const BannerTags = styled.span`
  font-weight: 100;
  margin-right: 16px;
`
