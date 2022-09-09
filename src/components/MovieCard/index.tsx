import { Container, ContainerCaption, ButtonImg, MovieImage, MovieInfo, Title } from './styles'

interface MovieCardProps {
  title: string
  date: string
  urlImg: string
  onClick?: () => void
}

export function MovieCard({ title, date, urlImg, onClick }: MovieCardProps) {
  return (
    <Container>
      <ButtonImg onClick={onClick}>
        <MovieImage
          src={`${process.env.REACT_APP_BASE_URL_IMAGEM}/${urlImg}`}
          alt={`Imagem do filme ${title}`}
        />
      </ButtonImg>
      <div>
        <MovieInfo>
          <div>
            <Title>{title}</Title>
          </div>
          <ContainerCaption onClick={onClick}>
            <span>Lançamento: </span>
            <time>{date}</time>
          </ContainerCaption>
        </MovieInfo>
      </div>
    </Container>
  )
}
