import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import { store } from './store'
import Rotas from './routes'
import defaultTheme from './themes/theme'
import { GlobalStyle } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <SideBar />
          <Rotas />
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
