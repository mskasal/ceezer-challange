import "./page.css";

export default function Cart() {
  return <div className="page">
    <nav className="page__navigation">
      <div className="logo">
        <a href="/">
          <img src="/logo.svg" />
        </a>
      </div>
    </nav>
    <div className="page-body">
      <h1>Cart</h1>
      <p>Cart description</p>
      <div className="layout">
        <main>Cart</main>
      </div>
    </div>
  </div>;
}
