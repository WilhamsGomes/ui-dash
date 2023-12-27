import { Container, Header } from "./styles";

interface IIcard {
  title: string;
  subTitle: string;
  value: number;
  type: "count" | "current";
  icon: JSX.Element;
}

export default function Card({ title, subTitle, value, icon, type }: IIcard) {
  return (
    <Container>
      <Header>
        <p>{title}</p>
        {icon}
      </Header>
      <h3>
        {type === "current" && "R$"} {value}
      </h3>
      <span>{subTitle}</span>
    </Container>
  );
}
