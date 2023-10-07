//import styled from "styled-components"
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarWrapper">
        <div className="navLeft">
          <span className="navLanguage">EN</span>
          
        </div>
        <div className="navCenter">Center</div>
        <div className="navRight">Right</div>
      </div>
    </div>
  )
}
