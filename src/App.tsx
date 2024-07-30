import { ThemeProvider } from "styled-components";

import { theme } from "./components/styles/theme";
import AppStyled from "./components/styles/App.styled";
import Container from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppStyled>
        <Container>
          <Weather />
        </Container>
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
