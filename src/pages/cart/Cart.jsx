import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Anouncement from "../../components/anouncement/Anouncement"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./cart.css"

const Container = styled.div`
    ;
`

const Wrapper = styled.div`
    padding:20px;
`

const Title = styled.h1`
    font-weight:300;
    text-align: center;
`

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${ props=>props.type === "filled" && "none"};
    background-color: ${ props=>props.type === "filled" ? "black" : "transparent"};
    color: ${ props=>props.type === "filled" ? "white" : "black"};
`

const TopTexts = styled.div`
    
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display:flex;
    justify-content:space-between;

`

const Info = styled.div`
    flex:3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
    display:flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${ props=>props.color};
`
const ProductSize = styled.span`
    
`

const PriceDetail = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display:flex;
    align-items: center;
`
const ProductAmount = styled.div`
    flex:1;
`
const ProductPrice = styled.div`
    flex:1;
`


const Summary = styled.div`
    flex:1;
`

export default function Cart() {
  return (
    <Container>
        <Navbar/>
        <Anouncement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="/assets/comPP1.png"/>
                            <Details>
                                <ProductName><b>Product:</b> DINO THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b>885477489849</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 45</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>summary</Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}
