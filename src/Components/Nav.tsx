import logo from "../assets/Logo.png";

export const Nav = () => {
  return <div className="nav-wrapper">
    <div className="img-wrapper">
      <img src={logo} alt="logo" />
      <span className="logo-text">Track My Coding Progress</span>
    </div>
    <nav className="nav">
      <h4>Home</h4>
      <h4>About</h4>
    </nav>
  </div>
}