import { BannerContainer, BannerTags, BannerTitle } from './styles'

type Props = {
  bgImage: string
  tags: string[]
  name: string
}

const Banner = ({ bgImage, name, tags }: Props) => {
  return (
    <BannerContainer $bgImage={bgImage}>
      <div className="container">
        {tags.map((tag) => {
          return <BannerTags key={tag}>{tag}</BannerTags>
        })}
        <BannerTitle>{name}</BannerTitle>
      </div>
    </BannerContainer>
  )
}

export default Banner
