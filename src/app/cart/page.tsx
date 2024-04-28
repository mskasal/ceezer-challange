import "./page.css";

export default function Cart() {
  return (
    <div className="page">
      <div className="page__header">
        <nav className="page__navigation container">
          <div className="logo">
            <a href="/">
              <img src="/logo.svg" />
            </a>
          </div>
        </nav>
      </div>

      <div className="page-body container">
        <h1>Cart</h1>
        <p>Cart description</p>
        <div className="layout">
          <main className="cart">
            <div className="cart-item">
              <div className="cart-item__header">
                <img src="" alt="" />
              </div>
              <div className="cart-item__details">
                <h3 className="cart-item__title">item name</h3>
                <ul className="cart-item__price" role="list">
                  <li className="piece-price">30</li>
                  <li className="weight">
                    <span>300</span>
                    <input
                      type="range"
                      max="100"
                      step="1"
                      hidden
                    />
                  </li>
                </ul>
              </div>
              <div className="cart-item__actions">
                <button className="edit">
                  <img src="" alt="" />
                </button>
                <button className="remove">
                  <img src="" alt="" />
                </button>
              </div>
              <div className="total-price">9000</div>
            </div>
          </main>
          <aside>
            <div className="cart-summary">
              <div className="cart-summary--header">
                <h2>Cart summary</h2>
                <small>Item count</small>
              </div>
              <div className="cart-summary--price">
                <ul className="calculation" role="list">
                  <li>
                    <b>Project cost:</b>
                    <span>9000</span>
                  </li>
                  <li>
                    <b>VAT %12</b>
                    <span>108</span>
                  </li>
                </ul>
                <div className="total">
                  <h4>9108</h4>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
