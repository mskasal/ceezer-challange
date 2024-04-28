import { create } from "zustand";
import projects from "../../data/projects.data.js";

export interface Project {
  id: number;
  name: string;
  country: string;
  image: string;
  price_per_ton: number;
  offered_volume_in_tons: number;
  supplier_name: string;
  earliest_delivery: string;
  sdgs: number[];
  description: string;
}

type ProjectsState = {
  items: Project[];
};

type ProjectsActions = {};

// const useCartStore = create<CartState & CartActions>((set) => ({
const useProjectsStore = create<ProjectsState & ProjectsActions>(() => ({
  items: [...projects],
}));

export default useProjectsStore;
