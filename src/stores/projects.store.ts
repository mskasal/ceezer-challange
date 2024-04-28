import { create } from "zustand";
import { persist } from "zustand/middleware";

import projects from "@data/projects.data.js";

export interface Project {
  id: number;
  name: string;
  country: string;
  image: string;
  price_per_ton: number;
  offered_volume_in_tons: number;
  supplier_name: string;
  earliest_delivery: string;
  distribution_weight: number;
  sdgs: number[];
  description: string;
}

type ProjectsState = {
  items: Project[];
};

type ProjectsActions = {};

const useProjectsStore = create<ProjectsState & ProjectsActions>()(
  persist(() => ({
    items: [...projects],
  }), { name: "projects-store", skipHydration: false }),
);

export default useProjectsStore;
