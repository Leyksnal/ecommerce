import React from 'react'
import styled from 'styled-components'
import {AiOutlineAlibaba} from 'react-icons/ai'
import {FaRegUser} from 'react-icons/fa'
import {BsCart4, BsThreeDotsVertical} from 'react-icons/bs'
import {BiMessageDetail, BiSearch} from 'react-icons/bi'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {MdOutlineMonochromePhotos} from 'react-icons/md'


export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Icon0 />
        <Logo>
          <Icon1 />
          <Span>Alibaba.<span>com</span></Span>
        </Logo>
        <Input>
          <Edge>Products</Edge>
          <Search>
            <Inner />
            <Icon2 />
          </Search>
          <SearchBtn>
            <Icon3 />
            <Spansearch>Search</Spansearch>
          </SearchBtn>
        </Input>
        <Lastholder>
          <Icon4 />
          <Icon5 />
          <Icon6 />
          <Icon7 />
        </Lastholder>
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
const Icon0 = styled(BsThreeDotsVertical)``;
const Spansearch = styled.div`
font-size: 1.1rem;
font-weight: 600;

@media screen and (max-width: 425px) {
  display: none;
}
`;
const Lastholder = styled.div`
/* background-color: purple; */
display: flex;
justify-content: space-between;
width: 200px;
align-items: center;
@media screen and (max-width: 768px) {
  display: none;
}
`;
const SearchBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #FF6501;
color: #fff;
width: 120px;
height: 35px;
border-top-right-radius: 15px;
border-bottom-right-radius: 15px;
transition: all 400ms;

:hover{
  cursor: pointer;
  background-color: #FF4F00;
}

@media screen and (max-width: 768px) {
  width: 140px;
}
@media screen and (max-width: 425px) {
  width: 40px;
  height: 30px;
}
`;
const Inner = styled.input`
width: 500px;
border: 0;
outline: none;
border-left: 1px gray solid;
margin: 5px 0;
opacity: 0.8;
padding: 0 10px;

@media screen and (max-width: 768px) {
  width: 250px;
}
@media screen and (max-width: 425px) {
  width: 100px;
}
`;
const Search = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 10px;
`;
const Edge = styled.div`
padding: 0 10px;

@media screen and (max-width: 425PX) {
  display: none;
}
`;
const Input = styled.div`
display: flex;
align-items: center;
background-color: #fff;
border: 2px solid #FF6501;
border-radius: 20px;

/* @media screen and (max-width: 425px) {
  margin-right: -30px;
} */
`;
const Span = styled.div`
color: #FF6501;
font-weight: 700;
span{
  color: #FF6501;
  font-weight: 300;
}
`;
const Logo = styled.div`
display: flex;
/* background-color: #fff; */
justify-content: space-between;
align-items: center;
`;
const Icon1 = styled(AiOutlineAlibaba)`
font-size: 3.5rem;
color: #FF6501;
@media screen and (max-width: 425px){
  font-size: 1.8rem;
}
`;
const Icon2 = styled(MdOutlineMonochromePhotos)`
opacity: 0.8;
color: #FF6501;
`;
const Icon3 = styled(BiSearch)`
font-size: 1.2rem;
margin-right: 10px;
`;
const Icon4 = styled(FaRegUser)`
font-size: 1.6rem;
`;
const Icon5 = styled(BiMessageDetail)`
font-size: 1.6rem;
`;
const Icon6 = styled(RiSecurePaymentFill)`
font-size: 1.6rem;
`;
const Icon7 = styled(BsCart4)`
font-size: 1.6rem;
`;
const Wrapper = styled.div` 
width: 95%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Container = styled.div`
/* background-color: pink; */
display: flex;
justify-content: center;
align-items: center;
height: 70px;

@media screen and (max-width: 768px) {
  width: 100%;
}
`;
