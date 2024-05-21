import logo from '../../assets/images/logo.svg'
import instaLogo from '../../assets/images/instagram.svg'
import faceLogo from '../../assets/images/facebook.svg'
import twitterLogo from '../../assets/images/twitter.svg'
import {
  FooterContainer,
  FooterText,
  SocialMediaLinks,
  SocialMediaList
} from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <img src={logo} alt="efood" />
      <SocialMediaList>
        <li>
          <SocialMediaLinks href="#">
            <img src={instaLogo} alt="instagram" />
          </SocialMediaLinks>
        </li>
        <li>
          <SocialMediaLinks href="#">
            <img src={faceLogo} alt="facebook" />
          </SocialMediaLinks>
        </li>
        <li>
          <SocialMediaLinks href="#">
            <img src={twitterLogo} alt="twitter" />
          </SocialMediaLinks>
        </li>
      </SocialMediaList>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
