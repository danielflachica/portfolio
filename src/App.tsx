import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import useSmoothScroll from "./hooks/useSmoothScroll";
import Topbar from "./components/Topbar";

function App() {
  const screenHeight = "100dvh";
  const navHeight = "100px";
  const heroHeight = `calc(${screenHeight} - ${navHeight})`;

  useSmoothScroll();

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
          <Topbar />
        </GridItem>
        <GridItem area="main">
          <Hero
            height={{ base: screenHeight, md: heroHeight }}
            bg="bg.emphasized"
          />
          <Navbar
            height={navHeight}
            mt={{ base: 0, md: heroHeight }}
            hideBelow="md"
          />
          <Section name="about" index={1} mt={{ base: screenHeight, md: 0 }}>
            <About />
          </Section>
          <Section name="experience" index={2} title="Work Experience">
            <Experience />
          </Section>
          <Section name="education" index={3}>
            <Education />
          </Section>
          <Section name="skills" index={4} title="Technical Skills">
            <Skills />
          </Section>
          <Section name="projects" index={5}>
            <Projects />
          </Section>
          <Section name="contact" index={6} title="Get in Touch">
            <Contact />
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
