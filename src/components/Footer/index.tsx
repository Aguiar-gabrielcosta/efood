import logo from '../../assets/images/logo.svg'
import instaLogo from '../../assets/images/instagram.svg'
import faceLogo from '../../assets/images/facebook.svg'
import twitterLogo from '../../assets/images/twitter.svg'
import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterContainer>
      <img src={logo} alt="efood" />
      <S.SocialMediaList>
        <li>
          <S.SocialMediaLinks href="#">
            <img src={instaLogo} alt="instagram" />
          </S.SocialMediaLinks>
        </li>
        <li>
          <S.SocialMediaLinks href="#">
            <img src={faceLogo} alt="facebook" />
          </S.SocialMediaLinks>
        </li>
        <li>
          <S.SocialMediaLinks href="#">
            <img src={twitterLogo} alt="twitter" />
          </S.SocialMediaLinks>
        </li>
      </S.SocialMediaList>
      <S.FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.FooterText>
    </S.FooterContainer>
  )
}

export default Footer
