import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: 70%;
width: clamp(58px, 15%, 60px);
height: 50%;
z-index: 2;

@media (max-width: 425px) {
    margin-left: 50%;
}
`
const HamburgerLine = styled.div`
background-color: rgb(255, 255, 255);
position: relative;
border-radius: 10px;
width: 90%;
height: 20%;
transition-duration: 800ms ;
`

// menu body
const MenuDiv = styled.div`
background-color: black;
position: fixed;
right: 0;
bottom: 0;
width: 35%;
height: 100%;
transition-duration: 800ms;
z-index: 1;
opacity: 0.9;
`
const NavBar = styled.nav`
margin-top: max(6em, 40%);
width: 100%;
height: 40%;
`
const List = styled.ul`
list-style-type: none;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 100%;
`
const ListItem = styled.li`
display: flex;
justify-content: center;
align-items: center;
font-size: clamp(10px, 0.9vw, 25px);
text-transform: uppercase;
width: 100%;
height: 15%;
cursor: pointer;

&:hover{
    border: solid 1px rgb(255, 255, 255);
}
`

export default function HamburgerMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [ItemsNames] = useState(['universo', 'atores', 'temporadas', 'comunidades'])

    const MenuBody = () => {
        return (
            <MenuDiv style={{right: isMenuOpen ? '0px' : '-268.8px'}}>
                <NavBar>
                    <List>
                        {ItemsNames.map(item => <ListItem key={item}>{item}</ListItem>)}
                    </List>
                </NavBar>
            </MenuDiv>
        )
    }
    return (
        <>
            <Div onClick={() => { setIsMenuOpen(!isMenuOpen) }}>
                <HamburgerLine style={{top: isMenuOpen ? '25%' : '0px', transform: isMenuOpen ? 'rotate(-45deg)' : 'rotate(0)'}}></HamburgerLine>
                <HamburgerLine style={{display: isMenuOpen ? 'none' : 'inherit'}}></HamburgerLine>
                <HamburgerLine style={{bottom: isMenuOpen ? '25%' : '0px', transform: isMenuOpen ? 'rotate(45deg)' : 'rotate(0)'}}></HamburgerLine>
            </Div>
            {MenuBody()}
        </>
    );
}