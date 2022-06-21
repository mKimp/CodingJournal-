import cat from "../assets/cat.png"
import { Nav } from "./Nav"
export const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <Nav />
      <div className="body-landing">
        <div className="cat-wrapper">
          <img src={cat} alt="cat-banner" />
        </div>
        <button className="btn-banner">Code Now</button>
      </div>
    </div>
    )  
}