import projects from "../../projects.data";
import SDGs from "../../sdgs.data";
import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <div className="layout">
      <main className="grid prodcut-list">
        {projects.map((project) => {
          return (
            <div className="project">
              <img src={project.image} alt={project.name} />
              <h3 className="project__title">{project.name}</h3>
              <ul>
                {SDGs.map((sdg) =>
                  project.sdgs.includes(sdg.id) && (
                    <li>
                      <small>{sdg.name}</small>
                      <Image
                        src={sdg.icon}
                        alt={sdg.name}
                        width={12}
                        height={12}
                      />
                    </li>
                  )
                )}
              </ul>
              <div className="project__action">
                <p className="project__price">
                  {project.price_per_ton}
                </p>
                <input
                  type="range"
                  max={project.offered_volume_in_tons}
                  step="1"
                />
                <button className="button project__action--cart">Buy</button>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
