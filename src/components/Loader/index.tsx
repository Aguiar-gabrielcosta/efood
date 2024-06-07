import { PulseLoader } from 'react-spinners'
import defaultTheme from '../../themes/theme'
import * as S from './styles'

const Loader = () => {
  const color = defaultTheme.primaryColor

  return (
    <S.LoaderContainer>
      <PulseLoader color={color} />
    </S.LoaderContainer>
  )
}

export default Loader
