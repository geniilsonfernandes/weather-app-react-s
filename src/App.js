import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import { Home } from "./pages/Home";
import { Base } from "./pages/Base";
import { DataProvider } from "./context/dataContext";
import { UnitProvider } from "./context/units";

function App() {
  return (
    <UnitProvider>
      <DataProvider>
        <ThemeProvider theme={theme}>
          <Base>
            <Home />
          </Base>
          <GlobalStyle />
        </ThemeProvider>
      </DataProvider>
    </UnitProvider>
  );
}

export default App;
