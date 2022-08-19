import styled from "styled-components";

export const Div = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
width: 100%;
height: 88vh;
`
export const MainContentDiv = styled.div`
display: flex;
align-items: flex-end;
width: max(36em, 36%);
height: 100%;

@media(max-width: 1024px){
    height: 90%;
}
@media(max-width: 425px){
    width: 100%;
}
`
export const WitcherImage = styled.img`
width: 100%;
height: 106%;
`
export const BrandAndWatchButton = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 23.5vh;
width: max(36em, 36%);
height: max-content;

@media(max-width: 1024px){
    margin-bottom: 15vh;
}
@media(max-width: 768px){
    margin-bottom: 21vh;
}
@media(max-width: 425px){
    width: 100%;
}
`
export const BrandImage = styled.img`
width: 60%;
`
export const WatchButton = styled.img`
border: none;
border-radius: 10px;
margin-top: 4%;
width: 42%;
height: 5.8vh;
cursor: pointer;
`