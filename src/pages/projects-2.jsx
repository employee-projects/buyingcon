import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@library/projects";

import PageBanner from "@components/PageBanner";

const ProjectsGrid = dynamic( () => import("@components/ProjectsGrid"), { ssr: false } );

const Portfolio2 = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Our Projects"} pageDesc={"2Creative studio at the intersection of art, designed technology."} />

      <ProjectsGrid projects={props.projects} layout={"list"} />
      
    </Layouts>
  );
};
export default Portfolio2;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}