import { useDispatch, useSelector } from 'react-redux'
import { Content, SideBarContainer } from './styles'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/sideBar'
import Cart from '../Cart'
import Forms from '../Forms'

const SideBar = () => {
  const { open } = useSelector((state: RootReducer) => state.sideBar)
  const dispatch = useDispatch()

  const closeSideBar = () => {
    dispatch(close())
  }

  return (
    <SideBarContainer className={open ? 'is-open' : ''}>
      <div className="overlay" onClick={closeSideBar}></div>
      <Content>
        <Cart />
        <Forms />
      </Content>
    </SideBarContainer>
  )
}

export default SideBar
