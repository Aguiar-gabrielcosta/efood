import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: ${(props) => props.theme.secondaryColor};
`

export const SocialMediaList = styled.ul`
  display: flex;
  margin: 32px 0 80px 0;
`

export const SocialMediaLinks = styled.a`
  margin-right: 8px;
`

export const FooterText = styled.p`
  font-size: 0.625rem;
  text-align: center;
  max-width: 480px;
`
