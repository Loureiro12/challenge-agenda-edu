import { ThemeProvider } from 'styled-components'
import { Home } from './screens/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
