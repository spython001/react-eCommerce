import styled from "styled-components"
import { categories } from "../../data"
import { mobile } from "../../responsive"
import CategoryItem from "../category item/CategoryItem"
//import "./categories.css"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({padding:"0px", flexDirection: "column",})};
`

export default function Categories() {
  return (
    <Container>
        { categories.map((item) =>(
            <CategoryItem key={item.id} item={ item }/>
        ))}
    </Container>
  )
}
