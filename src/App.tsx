import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Rotas from './routes'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './themes/theme'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Rotas />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
