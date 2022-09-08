import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border: solid 2px ${(props) => props.theme.white};
  border-radius: 10px;
  height: 32px;

  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

export const Input = styled.input`
  float: left;
  background-color: transparent;
  padding-left: 5px;
  font-size: 0.875rem;
  border: none;
  height: 32px;
  width: 191px;
  color: ${(props) => props.theme.white};

  ::placeholder {
    color: ${(props) => props.theme.white};
  }
`
