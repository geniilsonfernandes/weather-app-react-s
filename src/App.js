import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import { Home } from "./pages/Home";
import { Base } from "./pages/Base";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Base>
        <Home />
      </Base>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
