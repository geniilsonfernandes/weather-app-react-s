import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
