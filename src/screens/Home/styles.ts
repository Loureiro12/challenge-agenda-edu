import styled from 'styled-components'

export const Container = styled.div`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`

export const ContainerMovie = styled.main`
  max-width: 75rem;
  margin: 5.625rem 0.875rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;

  @media (max-width: 600px) {
    display: block;
  }
`
