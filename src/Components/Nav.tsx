import logo from "../assets/Logo.png";

export const Nav = (): JSX.Element =>{
  return <div className="nav-wrapper">
    <div className="img-wrapper">
      <img src={logo} alt="logo" />
      <span className="logo-text">Track My Coding Progress</span>
    </div>
    <nav className="nav">
      <ul className="nav-menu">
        <li className="nav-item"><a href="#">Home </a></li>
        <li className="nav-item"><a href="#">About</a></li>
      </ul>
    </nav>
  </div>
}