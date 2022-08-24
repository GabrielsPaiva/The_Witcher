import styled from 'styled-components';

export const Div = styled.div`
color: rgb(255, 255, 255);
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Montserrat', sans-serif;
width: 100%;
height: 12vh;
`
export const LogoAndTitle = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: max(300px, 26%);
height: 100%;
`
export const SiteLogo = styled.img`
margin-right: 5%;
height: 100%;
cursor: pointer;
`
export const Title = styled.h2`
font-size: clamp(12px, 0.9vw, 25px);
font-weight: 400;
margin: 0.8% 3% 0 0;
text-transform: uppercase;
`
// Nav Bar
export const NavBar = styled.nav`
display: flex;
justify-content: center;
align-items: center;
width: 60%;
height: 100%;
`
export const ItemsUl = styled.ul`
list-style-type: none;
display: flex;
justify-content: space-around;
align-items: center;
margin-left: 10%;
width: max(520px, 65%);
height: 100%;
`
export const ItemsList = styled.li`
font-size: clamp(15px, 0.9vw, 25px);
text-transform: uppercase;
cursor: pointer;

&:hover{
    font-size: clamp(15px, 0.88vw, 25px);
    font-weight: bolder;
}
`