import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>plant your goals.</h1>
      <div className="links">
        <Link to="/">goals</Link>
        <Link to="/create" >add goal</Link>
        <Link to="/update" >journal</Link>
        <Link to="/chat" >chat</Link>
      </div>
    </nav>
  );
}

export default Navbar;