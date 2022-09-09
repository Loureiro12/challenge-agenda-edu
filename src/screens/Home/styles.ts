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

export const ContainerButtonPagination = styled.div`
  display: flex;
  justify-content: center;
`

export const ButtonPagination = styled.button`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
  margin-bottom: 30px;
  cursor: pointer;

  :hover {
    background-color: red;
    color: white;
  }

  :active {
    background-color: ${(props) => props.theme.secondary};
    color: white;
    border: 1px solid ${(props) => props.theme.secondary};
  }

  :hover:not(.active) {
    background-color: ${(props) => props.theme.secondary};
  }

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`
