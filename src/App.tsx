import { ThemeProvider } from "styled-components";

import { theme } from "./components/styles/theme";
import AppStyled from "./components/styles/App.styled";
import Container from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppStyled>
        <Container>
          <p>hello world</p>
        </Container>
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
