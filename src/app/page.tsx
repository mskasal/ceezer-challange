"use client";
// import SDGs from "../../sdgs.data";
import countries from "../../data/countries.data";
import Image from "next/image";
import "./page.css";
import useProjectsStore from "@/stores/projects.store";
import useCartStore from "@/stores/cart.store";

export default function Home() {
  const projects = useProjectsStore((state) => state.items);
  const { addItem, items, totalCartPrice } = useCartStore((state) => state);

  return (
    <div className="page">
      <header className="page__header">
        <nav className="page__navigation container">
          <div className="logo">
            <a href="/">
              <img src="/logo.svg" />
            </a>
          </div>
          <div className="cart">
            <a href="/cart">
              <b>Cart total</b>
              <small>
                <b>{totalCartPrice}</b>
                {items.length} items
              </small>
            </a>
          </div>
        </nav>
      </header>
      <div className="page__body container">
        <div className="page__body--header">
          <h1>Projects</h1>
          <p>Porjects description</p>
        </div>
        <div className="layout">
          <div className="project-filter">
            filter items
          </div>
          <main className="grid project-list">
            {projects.map((project) => {
              return (
                <div className="project" key={`p-k-${project.id.toString()}`}>
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
        </div>
      </div>
    </div>
  );
}

// <ul>
//   {SDGs.map((sdg) =>
//     project.sdgs.includes(sdg.id) && (
//       <li>
//         <small>{sdg.name}</small>
//         <Image
//           src={sdg.icon}
//           alt={sdg.name}
//           width={12}
//           height={12}
//         />
//       </li>
//     )
//   )}
// </ul>
