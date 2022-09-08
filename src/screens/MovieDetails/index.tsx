import { Header } from '../../components/Header'

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
  return (
    <>
      <Header />
      <Container>
        <Content>
          <MovieImage
            src='https://www.themoviedb.org/t/p/w220_and_h330_face/c8z3JtI7hYAir7dxg0wpEv4s9nL.jpg'
            alt=''
          />

          <MovieInfo>
            <Title>Os Primeiros Passos de Groot</Title>
            <Synopsis>
              Baby Groot finalmente está pronto para tentar dar seus primeiros passos fora de seu
              vaso, aprendendo que se deve andar antes de correr.
            </Synopsis>

            <ExtraInformation>
              <ContentEvaluationTitle>Nota do filme</ContentEvaluationTitle>
              <ContentEvaluation>56</ContentEvaluation>
              <TitleMainCast>Elenco principal</TitleMainCast>
              <ContainerMainCast>
                <MainCastText>Vin Diesel</MainCastText>
                <MainCastText>Fred Tatasciore</MainCastText>
              </ContainerMainCast>
            </ExtraInformation>
          </MovieInfo>
        </Content>
      </Container>
    </>
  )
}
