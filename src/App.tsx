import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import { HERO_HEIGHT, NAVBAR_HEIGHT, SCREEN_HEIGHT } from "./constants/layout";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
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
            height={{ base: SCREEN_HEIGHT, md: HERO_HEIGHT }}
            bg="bg.emphasized"
          />
          <Navbar
            height={NAVBAR_HEIGHT}
            mt={{ base: 0, md: HERO_HEIGHT }}
            hideBelow="md"
          />
          <Section name="about" index={1} mt={{ base: SCREEN_HEIGHT, md: 0 }}>
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
