import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'
import Rotas from './routes'
import defaultTheme from './themes/theme'
import Footer from './components/Footer'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Rotas />
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
