import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Importa il tuo logo

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="40" /> {/* Aggiungi il logo */}
        </Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account">
                Account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/payment">
                Pagamento
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Carrello
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
