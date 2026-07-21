import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

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
          <Section
            name="hero"
            index={0}
            bg="bg.emphasized"
            displayHeader={false}
          >
            <Hero />
          </Section>
          <Navbar />
          <Section name="about" index={1}>
            <About />
          </Section>
        </GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
