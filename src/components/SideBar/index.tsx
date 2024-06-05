import { useDispatch, useSelector } from 'react-redux'
import { Content, SideBarContainer } from './styles'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/sideBar'

type Props = {
  children: JSX.Element
}

const SideBar = ({ children }: Props) => {
  const { open } = useSelector((state: RootReducer) => state.sideBar)
  const dispatch = useDispatch()

  const closeSideBar = () => {
    dispatch(close())
  }

  return (
    <SideBarContainer className={open ? 'is-open' : ''}>
      <div className="overlay" onClick={closeSideBar}></div>
      <Content>{children}</Content>
    </SideBarContainer>
  )
}

export default SideBar
