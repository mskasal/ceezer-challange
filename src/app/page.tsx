import ProjectList from "./projects/components/ProjectList.component";

import NavCart from "./projects/components/NavCart.component";

import "./page.css";

export default function Home() {
  return (
    <div className="page">
      <header className="page__header">
        <nav className="page__navigation container">
          <div className="logo">
            <a href="/">
              <img src="/logo.svg" />
            </a>
          </div>
          <NavCart />
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
          <ProjectList />
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
