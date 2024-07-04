import { Button } from "./components/Button/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="danger" />
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button />
    </ThemeProvider>
  );
}
