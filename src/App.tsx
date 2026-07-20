import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Grid
        templateAreas={`
        "header"
        "main"
        "footer"
      `}
      >
        <GridItem area="header">
          <Header />
        </GridItem>
        <GridItem area="main">Main</GridItem>
        <GridItem area="footer">Footer</GridItem>
      </Grid>
    </>
  );
}

export default App;
