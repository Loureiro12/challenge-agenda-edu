import { SearchBoxes } from '../SearchBoxes'

import { Container, Content, Title } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <Title>Challenge - Agenda Edu</Title>
        <SearchBoxes />
      </Content>
    </Container>
  )
}
