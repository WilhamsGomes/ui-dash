import { Container, List, IconProfile } from "./styles";

export default function Header() {
  return (
    <Container>
      <List>
        <span />
        <li className="active">Dashboard</li>
        <li>Faturas</li>
      </List>
      <IconProfile />
    </Container>
  );
}
