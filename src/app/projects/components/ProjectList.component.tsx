"use client";

import useProjectsStore from "@/stores/projects.store";

import ProjectItem from "./ProjectItem.component";
import "./ProjectList.styles.css";

export default function ProjectList() {
  const projects = useProjectsStore((state) => state.items);

  return (
    <main className="grid project-list">
      {projects.map((project) => <ProjectItem project={project} key={`p-k-${project.id}`} />)}
    </main>
  );
}
