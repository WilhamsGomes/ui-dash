import Router from "./Router";
import GlobalStyles from "./view/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./view/styles/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./app/services/queryClient";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
