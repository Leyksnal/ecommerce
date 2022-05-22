import React from 'react'
import styled from 'styled-components'
import {CgMenu} from 'react-icons/cg'
import {GiNigeria} from 'react-icons/gi'

export default function Categories() {
  return (
    <Container>
        <Wrapper>
            <Cat1>
                <Title>
                    <Icon />
                    <Catspan>Categories</Catspan>
                </Title>
                <Menu>
                    <Menuspan>Ready to Ship</Menuspan>
                    <Menuspan>Person Prospective</Menuspan>
                    <Menuspan>Buyer Central</Menuspan>
                    <Menuspan>Sell on Alibaba</Menuspan>
                    <Menuspan>Help</Menuspan>
                </Menu>
            </Cat1>
            <Cat2>
                <Lang>English - NGN</Lang>
                <Cont>
                    <Span>Ship to:</Span>
                    <Icon2 />
                </Cont>
            </Cat2>
        </Wrapper>
    </Container>
  )
}

// const Container = styled.div``
// const Container = styled.div``
const Cont = styled.div`
display: flex;
align-items: center;
transition: all 350ms;
:hover{
    cursor: pointer;
    color: green;
}

@media screen and (max-width: 768px){
    font-size: 0.5rem;
}
`;
const Lang = styled.div`
margin: 0 10px;
transition: all 350ms;
:hover{
    cursor: pointer;
    color: green;
}

@media screen and (max-width: 768px){
    font-size: 0.5rem;
}
`;
const Cat2 = styled.div`
display: flex;
align-items: center;

`;
const Menuspan = styled.div`
margin: 0 10px;
transition: all 350ms;
:hover{
    cursor: pointer;
    color: green;
}

@media screen and (max-width: 768px){
    font-size: 0.5rem;
}
`;
const Span = styled.div`

`;
const Catspan = styled.div`
margin: 0 10px;
@media screen and (max-width: 768px){
    font-size: 0.6rem;
}
`;
const Icon2 = styled(GiNigeria)`
color: green;
font-size: 1.2rem;
margin-left: 5px;
transition: all 350ms;
:hover{
    cursor: pointer;
    color: black;
}
`;
const Icon = styled(CgMenu)``;
const Title = styled.div`
display: flex;
align-items: center;
transition: all 350ms;

:hover{
    cursor: pointer;
    color: green;
}

@media screen and (max-width: 768px){
    font-size: 0.8rem;
}
`;
const Cat1 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 768px){
    flex-wrap: wrap;
}
`;
const Menu = styled.div`
display: flex;
align-items: center;
margin: 0 10px;

@media screen and (max-width: 768px){
    margin: 10px 0;
}
`;
const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media screen and (max-width: 768px){
    flex-wrap: wrap;
    flex-direction: column;
}
`;
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px 0px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

`;