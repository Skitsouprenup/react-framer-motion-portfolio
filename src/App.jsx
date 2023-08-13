import { ThemeProvider } from "styled-components"
import { ContentContainer, FlexContainer } from "./styles/globals.styles"
import theme from "./utils/theme"
import Introduction from "./components/Introduction"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import Navbar from "./components/Navbar"

function App() {

  return <main>
    <ThemeProvider theme={theme}>
      <ContentContainer>
        <FlexContainer $direction="column">
          <Navbar />
          <Introduction />
          <SkillsSection />
          <ProjectsSection />
        </FlexContainer>
      </ContentContainer>
    </ThemeProvider>
  </main>
}

export default App
