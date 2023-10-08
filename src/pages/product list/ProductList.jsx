import styled from "styled-components"
import Anouncement from "../../components/anouncement/Anouncement"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Newsletter from "../../components/newsletter/Newsletter"
import Products from "../../components/products/Products"
import { mobile } from "../../responsive"
import "./productList.css"

const Container = styled.div`
`

const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({margin:"0px 20px", display:"flex", flexDirection:"column"})};

`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20;
    ${mobile({marginRight:"0px "})};

`

const Select = styled.select`
    background-color: white;
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin:"10px 0px"})};
    
`
const Option = styled.option`
    
   
`


export default function ProductList() {
  return (
    <Container>
        <Navbar />
        <Anouncement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                
                <Select>
                    <Option disabled selected>
                        Sixe
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option selected>Price (asc)</Option>
                    <Option selected>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
