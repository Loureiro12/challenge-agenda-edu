import styled from 'styled-components'

export const Container = styled.div`
  max-width: 14.31rem;
  position: relative;
`

export const MovieImage = styled.img`
  width: 14.31rem;
  height: 21.25rem;
  border-radius: 8px;
`

export const MovieInfo = styled.a`
  width: 100%;
  text-align: center;
  cursor: pointer;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1rem;
  color: ${(props) => props.theme.black};
  margin-top: 0.75rem;
`
export const ContainerCaption = styled.div`
  margin-top: 0.313rem;
  span {
    font-weight: 600;
    font-size: 0.75rem;
    color: ${(props) => props.theme.black};
  }

  time {
    font-weight: 400;
    font-size: 0.75rem;
    color: ${(props) => props.theme.black};
  }
`

export const ButtonImg = styled.a`
  cursor: pointer;
`
