import { ThemeProvider } from 'styled-components'
import { Home } from './screens/Home'
import { MovieDetails } from './screens/MovieDetails'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MovieDetails />
      <GlobalStyle />
    </ThemeProvider>
  )
}
