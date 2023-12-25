import { ReactNode } from "react";
import { Main } from "./styles";
import Header from "../components/Header/Header";

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return(
    <Main>
      <Header />
      {children}
    </Main>
  );
}
