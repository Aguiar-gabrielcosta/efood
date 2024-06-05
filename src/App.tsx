import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'
import Rotas from './routes'
import defaultTheme from './themes/theme'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'
import SideBar from './components/SideBar'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <SideBar>
            <Cart />
          </SideBar>
          <Rotas />
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
