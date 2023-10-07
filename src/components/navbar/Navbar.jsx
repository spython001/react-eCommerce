//import styled from "styled-components"
import "./navbar.css"
import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from "@mui/material"


export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarWrapper">
        <div className="navLeft">
          <span className="navLanguage">EN</span>
            <div className="navSearch">
              <input type="text" />
              <Search style={{ color:"gray", fontSize:16}}/>
            </div>
        </div>
        <div className="navCenter">
          <h1 className="navLogo">SPYTHON.</h1>
        </div>
        <div className="navRight">
          <div className="navMenuItem">REGISTER</div>
          <div className="navMenuItem">SIGN IN</div>
          <div className="navMenuItem">
            <Badge badgeContent={4} color="primary" />
            <ShoppingCartOutlined />
        </div>
        </div>
        
      </div>
    </div>
  )
}
