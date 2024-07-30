import { useState } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "styled-components";

import { theme } from "./components/styles/theme";
import AppStyled from "./components/styles/App.styled";
import Container from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles";
import Weather from "./components/weather/Weather";

function App() {
  const [backgroundTheme, setBackgroundTheme] = useState("clear");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Toaster />
      <AppStyled bg={backgroundTheme}>
        <Container>
          <Weather setBackgroundTheme={setBackgroundTheme} />
        </Container>
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
