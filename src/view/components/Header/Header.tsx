import { Container, List, IconProfile } from "./styles";

export default function Header() {
  return (
    <Container>
      <List>
        <li>Dashboard</li>
        <li>Faturas</li>
      </List>
      <IconProfile />
    </Container>
  );
}
