import { Flex, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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
        <GridItem area="main">
          <Flex direction="column" flex="1">
            <Hero />
            <Navbar />
          </Flex>
        </GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
