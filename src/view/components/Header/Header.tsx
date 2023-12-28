import { Container, List, IconProfile } from "./styles";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <List>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/library">Faturas</NavLink>
        </li>
      </List>
      <IconProfile />
    </Container>
  );
}
