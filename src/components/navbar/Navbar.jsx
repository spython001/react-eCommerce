import styled from "styled-components"
//import "./navbar.css"
import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { mobile } from "../../responsive"


const Container = styled.div`
  height: 60px;
  ${mobile({height:"50px"})};
`

const Wrapper = styled.div`
  padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:"10px 0"})};
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})};
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    
`
const Input = styled.input`
    border: none;
    background-color: #fff;
    ${mobile({width:"50px"})};
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize:"20px"})};
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2, justifyContent:"center"})};
`

const MenuItem = styled.div`
  font-size: 14px;
    cursor: pointer;
    margin: 25px;
    ${mobile({fontSize:"12px", marginLeft: "5px"})};
`


export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search"/>
              <Search style={{ color:"gray", fontSize:16}}/>
            </SearchContainer>
        </Left>
        <Center>
          <Logo>SPYTHON.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary" />
            <ShoppingCartOutlined />
        </MenuItem>
        </Right>
        
      </Wrapper>
    </Container>
  )
}
