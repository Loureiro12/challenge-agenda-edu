import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  display: flex;
`

export const Content = styled.div`
  max-width: 75rem;
  width: 100%;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    display: block;
    text-align: center;
  }
`
export const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => props.theme.white};

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`
