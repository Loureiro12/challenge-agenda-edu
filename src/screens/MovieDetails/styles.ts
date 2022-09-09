import styled from 'styled-components'

export const Container = styled.div`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 75rem;
  margin: 5.625rem 0.875rem;
  display: flex;
  padding: 30px;
  border-radius: 8px;
  background-color: #c1a0f9;

  @media (max-width: 600px) {
    display: block;
    justify-content: center;
    text-align: center;
  }
`

export const MovieImage = styled.img`
  width: 14.31rem;
  height: 21.25rem;
  border-radius: 8px;
`

export const MovieInfo = styled.div`
  align-items: center;
  margin-left: 10px;
`

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.black};
  margin-bottom: 0.625rem;
`

export const Synopsis = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.black};
  text-align: justify;
  margin-bottom: 0.625rem;
`

export const ExtraInformation = styled.div``

export const TitleMainCast = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.black};
`

export const ContainerMainCast = styled.div`
  display: flex;

  p + p {
    margin-left: 10px;
  }
`

export const MainCastText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${(props) => props.theme.black};
`

export const ContentEvaluation = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${(props) => props.theme.black};
  margin-bottom: 0.625rem;
`

export const ContentEvaluationTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.black};
`
