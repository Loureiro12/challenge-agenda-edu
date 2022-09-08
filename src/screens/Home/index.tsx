import { Header } from '../../components/Header'
import { MovieCard } from '../../components/MovieCard'

import { Container, ContainerMovie } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <ContainerMovie>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </ContainerMovie>
      </Container>
    </>
  )
}
