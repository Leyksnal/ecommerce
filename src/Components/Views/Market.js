import React from 'react'
import styled from 'styled-components'
import {FaAngleRight} from 'react-icons/fa'

export default function Market() {
  return (
    <Container>
        <Wrapper>
            <Market1>
                <Wt>My Markets</Wt>
                <Headings>
                    <Cont>
                        <Img src='/assets/f1.png' />
                        <Span1>Consumer Electronics</Span1>
                    </Cont>
                    <Icon />
                </Headings>
                <Headings>
                    <Cont>
                        <Img src='/assets/f1.png' />
                        <Span1>Consumer Electronics</Span1>
                    </Cont>
                    <Icon />
                </Headings>
                <Headings>
                    <Cont>
                        <Img src='/assets/f1.png' />
                        <Span1>Consumer Electronics</Span1>
                    </Cont>
                    <Icon />
                </Headings>
                <Headings>
                    <Cont>
                        <Img src='/assets/f1.png' />
                        <Span1>Consumer Electronics</Span1>
                    </Cont>
                    <Icon />
                </Headings>
                <Headings>
                    <Cont>
                        <Img src='/assets/f1.png' />
                        <Span1>Consumer Electronics</Span1>
                    </Cont>
                    <Icon />
                </Headings>
                <Headings>
                    <Cont>
                        <Img src='/assets/f1.png' />
                        <Span1>Consumer Electronics</Span1>
                    </Cont>
                    <Icon />
                </Headings>
                <Headings>
                    <Cont>
                        <Img src='/assets/f1.png' />
                        <Span1>Consumer Electronics</Span1>
                    </Cont>
                    <Icon />
                </Headings>
                <Headings>
                    <Cont>
                        <Img src='/assets/f1.png' />
                        <Span1>Consumer Electronics</Span1>
                    </Cont>
                    <Icon />
                </Headings>
            </Market1>
            <Market2>
                <Bg />
                <Top>
                    <Span>Consumer Electronics</Span>
                    <Span>Discover popular products</Span>
                    <Button>View more</Button>
                </Top>
            </Market2>
            <Market3>
                <Button3>Selected Machinery</Button3>
                <Pro>
                    <Tile>
                        <Name>Woodworking Machinery</Name>
                        <Mkbtn>Source Now</Mkbtn>
                    </Tile>
                    <Img2 />
                </Pro>
            </Market3>
        </Wrapper>
    </Container>
  )
}



// const Container = styled.div``;
const Wt = styled.div`
padding: 8px 10px;
border-bottom: solid gray 2px;
font-size: 1.2rem;
`;
const Button3 = styled.div``;
const Img2 = styled.div``;
const Mkbtn = styled.div``;
const Name = styled.div``;
const Tile = styled.div``;
const Pro = styled.div``;
const Button = styled.div``;
const Top = styled.div``;
const Bg = styled.img`
width: 100%;
height: 100%;
`;
const Icon = styled(FaAngleRight)``;
const Span1 = styled.div`
font-size: 0.8rem;
`;
const Span = styled.div`
`;
const Img = styled.img`
width: 35px;
height: 35px;
margin-right: 10px;
object-fit: cover;
`;
const Cont = styled.div`
display: flex;
align-items: center;
`;
const Headings = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10px;
transition: all 350ms;

:hover{
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 10px 0;
}
`;
const Wrapper = styled.div`
width: 1250px;
background-color: cyan;
display: flex;
align-items: center;
/* justify-content: center; */
/* padding: 5px 0; */
`;
const Market2 = styled.div`
display: flex;
background-color: brown;
width: 50%;
height: 400px;
`;
const Market3 = styled.div`
width: 25%;
background-color: green;
`;
const Market1 = styled.div`
width: 25%;
padding: 20px 5px;
`;
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;