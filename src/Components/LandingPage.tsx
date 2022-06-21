import cat from "../assets/cat.png"
import { Nav } from "./Nav"
import { Navigate, useNavigate } from "react-router-dom"
export const LandingPage = () => {
  const navigator = useNavigate();

  const handleOnClick = () => {
    navigator("/home")
  }
  return (
    <div className="landing-wrapper">
      <Nav />
      <div className="body-landing">
        <div className="cat-wrapper">
          <img src={cat} alt="cat-banner" />
        </div>
        <button className="btn-banner" onClick={handleOnClick}>Code Now</button>
      </div>
    </div>
    )  
}