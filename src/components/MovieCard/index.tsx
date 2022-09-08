import { Container, ContainerCaption, ButtonImg, MovieImage, MovieInfo, Title } from './styles'

export function MovieCard() {
  return (
    <Container>
      <ButtonImg>
        <MovieImage
          src='https://www.themoviedb.org/t/p/w220_and_h330_face/c8z3JtI7hYAir7dxg0wpEv4s9nL.jpg'
          alt=''
        />
      </ButtonImg>
      <div>
        <MovieInfo>
          <div>
            <Title>Fogo Ardente</Title>
          </div>
          <ContainerCaption>
            <span>Lançamento: </span>
            <time>17 de ago de 2022</time>
          </ContainerCaption>
        </MovieInfo>
      </div>
    </Container>
  )
}
