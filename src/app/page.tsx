"use client"
import { useState } from "react";
import MainContainer from "./mainContainer";
import ElipticalNav from "./elipticalNav/elipticalNav";

import HomePage from "./homePage/homePage";
import SkillsPage from "./skillsPage/skillsPage";
import ExperiencePage from "./experiencePage/experiencePage";
import ResumePage from "./resumePage/resumePage";

const PAGES = {
  HOME: {pageName: "Home", module: HomePage },
  SKILLS: {pageName: "Skills", module: SkillsPage },
  EXPERIENCE: {pageName: "Experience", module: ExperiencePage },
  RESUME: {pageName: "Resume", module: ResumePage },
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);

  return (
    <main>
      <MainContainer currentPage={currentPage}/>
      <ElipticalNav currentPage={currentPage} pages={PAGES} setCurrentPage={setCurrentPage}/>
    </main>
  )
}
