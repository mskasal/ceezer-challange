"use client";
import useCartStore from "@/stores/cart.store";
import useProjectsStore from "@/stores/projects.store";

import countries from "../../../../data/countries.data";

import "./ProjectList.styles.css"

export default function ProjectList() {
  const addItem = useCartStore((state) => state.addItem);
  const projects = useProjectsStore((state) => state.items);

  return (
    <main className="grid project-list">
      {projects.map((project) => {
        return (
          <div className="project" key={`p-k-${project.id}`}>
            <img src={project.image} alt={project.name} />
            <p className="project__description" hidden>
              {project.description}
            </p>
            <h3 className="project__title">{project.name}</h3>
            <ul className="project__details" role="list">
              <li>
                <span className="flag" title={project.country}>
                  {(countries as any)[project.country]}
                </span>
                <small className="company-name">
                  {project.supplier_name}
                </small>
              </li>
              <li>
                <img
                  src="/estimate_time.svg"
                  alt="Earliest estimated date"
                />
                <time dateTime={project.earliest_delivery}>
                  {project.earliest_delivery}
                </time>
              </li>
            </ul>
            <div className="project__action">
              <p className="project__price">
                €{project.price_per_ton}
              </p>
              <input
                type="range"
                max={project.offered_volume_in_tons}
                step="1"
                hidden
              />
              <button
                className="button project__action--cart"
                onClick={() => {
                  addItem(project, 12);
                }}
              >
                Buy
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
}
