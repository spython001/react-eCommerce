import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import styled from "styled-components"
//import "./slider.css"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    margin-top: 10px;
    overflow: hidden;
    
    
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;
    background-color: #${props=>props.bg};
    
`

const ImgContainer = styled.div`
    height: 95%;
    flex: 1;
`

const Image = styled.img`
    height: 80%;
    
`

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`
//InfoContainer contents
const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

export default function Slider() {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide bg="f5fafd">
                <ImgContainer>
                    <Image src="/assets/comPerson4.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER RUSH!</Title>
                    <Desc>DONT DULL! GET A FLAT 25% OFF ON NEW ARRIVALS</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>

            <Slide bg="fcf1ed">
                <ImgContainer>
                    <Image src="/assets/comPerson3.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>WINTER RUSH!</Title>
                    <Desc>DONT DULL! GET A FLAT 25% OFF ON NEW ARRIVALS</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>

            <Slide bg="fbf0f4">
                <ImgContainer>
                    <Image src="/assets/comPerson4.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>POPULAR RUSH!</Title>
                    <Desc>DONT DULL! GET A FLAT 25% OFF ON NEW ARRIVALS</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}
