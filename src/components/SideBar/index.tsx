import { useDispatch, useSelector } from 'react-redux'
import Cart from '../Cart'
import Forms from '../Forms'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/sideBar'
import * as S from './styles'

const SideBar = () => {
  const { open } = useSelector((state: RootReducer) => state.sideBar)
  const dispatch = useDispatch()

  const closeSideBar = () => {
    dispatch(close())
  }

  return (
    <S.SideBarContainer className={open ? 'is-open' : ''}>
      <div className="overlay" onClick={closeSideBar}></div>
      <S.Content>
        <Cart />
        <Forms />
      </S.Content>
    </S.SideBarContainer>
  )
}

export default SideBar
