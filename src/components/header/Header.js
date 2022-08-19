import React from 'react';
import * as S from './Style'

// images
import siteLogo from '../../assets/siteLogo.png'
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';

export default function Header() {


    const changeToHamburger = () => {
        if (window.screen.availWidth <= 768) {
            return (
                <HamburgerMenu/>
            )
        } else {
            return (
                <S.ItemsUl>
                    <S.ItemsList>universo</S.ItemsList>
                    <S.ItemsList>atores</S.ItemsList>
                    <S.ItemsList>temporadas</S.ItemsList>
                    <S.ItemsList>comunidades</S.ItemsList>
                </S.ItemsUl>
            )
        }
    }

    return (
        <S.Div>
            <S.LogoAndTitle >
                <S.SiteLogo src={siteLogo} alt='' />
                <S.Title>projeto vermelho</S.Title>
            </S.LogoAndTitle>

            <S.NavBar>
                {changeToHamburger()}
            </S.NavBar>
        </S.Div>
    );
}