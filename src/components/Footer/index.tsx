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
          <S.SocialMediaLinks
            title="Clique e acesse o instagram da eFood"
            href="#"
          >
            <img src={instaLogo} alt="instagram" />
          </S.SocialMediaLinks>
        </li>
        <li>
          <S.SocialMediaLinks
            title="Clique e acesse o facebook da eFood"
            href="#"
          >
            <img src={faceLogo} alt="facebook" />
          </S.SocialMediaLinks>
        </li>
        <li>
          <S.SocialMediaLinks
            title="Clique e acesse o twitter da eFood"
            href="#"
          >
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
