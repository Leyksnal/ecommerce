import React from 'react'
import styled from 'styled-components'
import {ImNewTab} from 'react-icons/im'

export default function ProCard() {
  return (
    <Container>
        <Wrapper>
            <Topper>
                <I />
                <Text>New Arrivals</Text>
            </Topper>
            <Gal>
                <InnerGal>
                    <Img />
                    <Price>₦1,241.51</Price>
                    <Info>Trending</Info>
                </InnerGal>
                <InnerGal>
                    <Img />
                    <Price>₦1,241.51</Price>
                    <Info>Trending</Info>
                </InnerGal>
                <InnerGal>
                    <Img />
                    <Price>₦1,241.51</Price>
                    <Info>Trending</Info>
                </InnerGal>
            </Gal>
        </Wrapper>
    </Container>
  )
}


// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;


const Info = styled.div`
margin-bottom: 10px;
`;
const Price = styled.div`
font-size: 1.2rem;
font-weight: bold;
`;
const Img = styled.div`
width: 100%;
height: 70%;
background-color: red;
object-fit: cover;
border-radius: 5px;
`;
const InnerGal = styled.div`
background-color: brown;
width: 170px;
height: 200px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
margin: 10px;
border-radius: 5px;

@media screen and (max-width: 768px){
    width: 250px;
    height: 250px;
}
`;
const Gal = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

@media screen and (max-width: 768px){
    flex-direction: column;
}
`;
const Text = styled.div`
font-size: 1.3rem;
margin-left: 5px;
`;
const I = styled(ImNewTab)`
font-size: 1.4rem;
`;
const Topper = styled.div`
display: flex;
align-items: center;
margin-left: 10px;

@media screen and (max-width: 768px){
    align-items: center;
    justify-content: center;
    margin-left: 0;
}
`;
const Wrapper = styled.div`
width: 570px;
height: 250px;
background-color: #fff;

@media screen and (max-width: 768px){
    height: max-content;
}
`;
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
background-color: pink;
padding: 10px 0;

@media screen and (max-width: 768px){
    margin-top: 0;
}
`;