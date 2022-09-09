import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import useMovie from '../../hooks/useMovie'

import {
  Container,
  MovieImage,
  MovieInfo,
  Title,
  Synopsis,
  ContainerMainCast,
  MainCastText,
  ExtraInformation,
  ContentEvaluation,
  Content,
  TitleMainCast,
  ContentEvaluationTitle,
} from './styles'

export function MovieDetails() {
  const { fetchSpecificMovie, specificMovie } = useMovie()
  const { idMovie } = useParams()

  useEffect(() => {
    return fetchSpecificMovie(idMovie ?? '')
  }, [])
  return (
    <>
      <Header />
      <Container>
        <Content>
          <MovieImage
            src={`${process.env.REACT_APP_BASE_URL_IMAGEM}/${specificMovie.poster_path}`}
            alt={`Imagem do filme ${specificMovie.title}`}
          />

          <MovieInfo>
            <Title>{specificMovie.title}</Title>
            <Synopsis>{specificMovie.overview}</Synopsis>

            <ExtraInformation>
              <ContentEvaluationTitle>Nota do filme</ContentEvaluationTitle>
              <ContentEvaluation>{specificMovie.vote_average}</ContentEvaluation>
              <TitleMainCast>Gêneros</TitleMainCast>
              <ContainerMainCast>
                {specificMovie?.genres?.map((e) => {
                  return <MainCastText key={e.id}>{e.name}</MainCastText>
                })}
              </ContainerMainCast>
            </ExtraInformation>
          </MovieInfo>
        </Content>
      </Container>
    </>
  )
}
