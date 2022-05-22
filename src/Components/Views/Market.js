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
                <Top>
                    <Spancos>Popular Products <br /> and suppliers</Spancos>
                    <Span2>Discover popular products</Span2>
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
                    <Img2 src='/assets/f1.png' />
                </Pro>
                <Pro>
                    <Tile>
                        <Name>Woodworking Machinery</Name>
                        <Mkbtn>Source Now</Mkbtn>
                    </Tile>
                    <Img2 src='/assets/f1.png' />
                </Pro>
                <Pro>
                    <Tile>
                        <Name>Woodworking Machinery</Name>
                        <Mkbtn>Source Now</Mkbtn>
                    </Tile>
                    <Img2 src='/assets/f1.png' />
                </Pro>
            </Market3>
        </Wrapper>
    </Container>
  )
}



// const Container = styled.div``;
const Wt = styled.div`
padding: 0 10px;
border-bottom: 1px solid rgba( 0, 0, 0, 0.2 );
font-size: 1.2rem;
padding-bottom: 8px;
`;
const Button3 = styled.button`
background-color: #FF4F00;
color: #fff;
width: 80%;
height: 30px;
outline: none;
border: 0;
font-size: 0.9rem;
transition: all 400ms;

:hover{
    cursor: pointer;
    background-color: #cf5712;
}
`;
const Img2 = styled.img`
width: 45px;
height: 45px;
object-fit: cover;
`;
const Mkbtn = styled.button`
background-color: #FF6501;
color: #fff;
width: max-content;
height: 20px;
transition: all 400ms;
border: 0;
outline: none;
border-radius: 20px;
font-size: 0.7rem;
:hover{
  cursor: pointer;
  background-color: #FF4F00;
}
`;
const Name = styled.div`
width: 150px;
font-size: 1.1rem;
font-weight: 600;
`;
const Tile = styled.div``;
const Pro = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
width: 100%;
padding: 20px 0;
border-bottom: 1px solid rgba( 0, 0, 0, 0.2 );
`;
const Button = styled.button`
margin-left: 15px;
width: 100px;
padding: 7px 0;
margin-top: 10px;
border-radius: 20px;
color: #fff;
background-color: transparent;
border: solid 1px #fff;
transition: all 450ms;

:hover{
    background-color: #FF6501;
    color: #fff;
    cursor: pointer;
    border: 0;
}
`;
const Top = styled.div`
background: rgba( 255, 118, 0, 0.45 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border-radius: 15px;
height: 240px;
margin-left: 40px;
display: flex;
justify-content: center;
flex-direction: column;
width: 320px;
`;

const Icon = styled(FaAngleRight)``;
const Span1 = styled.div`
font-size: 0.8rem;
`;
const Spancos = styled.div`
font-size: 1.8rem;
font-weight: 600;
margin-left: 15px;
`;
const Span = styled.div`
`;
const Span2 = styled.div`
margin-left: 15px;
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
    padding: 5px 0;
}
`;
const Wrapper = styled.div`
width: 1250px;
/* background-color: cyan; */
display: flex;
align-items: center;
padding: 5px 0;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

@media screen and (max-width: 768px){
    flex-direction: column;
    margin-top: -60px;
    padding: 0 0;
}

`;
const Market2 = styled.div`
display: flex;
width: 50%;
height: 400px;
background-image: url('/assets/im3.jpg');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
color: #fff;
display: flex;
align-items: center;
border-radius: 5px;

@media screen and (max-width: 768px){
    width: 100%;
    border-radius: 0;
    height: 300px;
    align-items: center;
}
`;
const Market3 = styled.div`
width: 25%;
padding: 0 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media screen and (max-width: 768px){
    width: 90%;
    margin-top: 20px;
}
`;
const Market1 = styled.div`
width: 25%;
padding: 20px 5px;

@media screen and (max-width: 768px){
    width: 90%;
}
`;
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #F2F3F7;
margin-top: 30px;
`;