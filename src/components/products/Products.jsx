//import "./products.css"
import styled from "styled-components"
import { popularProducts } from "../../data"
import Product from "../product/Product"

const Container = styled.div`
    padding:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function Products() {
  return (
    <Container>
        { popularProducts.map((item) => (
            <Product key={item.id} item={item}/>
        ))}
    </Container>
  )
}
