import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import { MovieCard } from '../../components/MovieCard'
import useMovie from '../../hooks/useMovie'
import usePagination from '../../hooks/usePagination'

import { Container, ContainerMovie, ButtonPagination, ContainerButtonPagination } from './styles'

export function Home() {
  const { movie, fetchMovie } = useMovie()
  const { setActualPage, actualPage } = usePagination()
  const navigate = useNavigate()

  const handleMovie = (id: string) => {
    navigate(`/movie/${id}`)
  }

  useEffect(() => {
    fetchMovie(actualPage)
  }, [actualPage])
  return (
    <>
      <Header />
      <Container>
        <ContainerMovie>
          {movie &&
            movie?.map((e) => {
              return (
                <MovieCard
                  key={e.id}
                  title={e.title}
                  date={e.release_date}
                  urlImg={e.poster_path}
                  onClick={() => handleMovie(e.id)}
                />
              )
            })}
        </ContainerMovie>
      </Container>
      <ContainerButtonPagination>
        <ButtonPagination onClick={() => setActualPage(actualPage - 1)}>❮</ButtonPagination>
        <ButtonPagination onClick={() => setActualPage(actualPage + 1)}>❯</ButtonPagination>
      </ContainerButtonPagination>
    </>
  )
}
