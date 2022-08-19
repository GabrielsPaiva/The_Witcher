import React from 'react';
import * as S from './Style'

// images
import witcherImage from '../../assets/Geralt.png'
import brandImage from '../../assets/brandImage.png'
import watchButton from '../../assets/button.png'

export default function Main() {
    return (
        <S.Div>
            <S.MainContentDiv>
                <S.WitcherImage src={witcherImage} alt=''/>
                    <S.BrandAndWatchButton>
                        <S.BrandImage src={brandImage} alt='imagem da logo do "the witcher wild hunt" ' />
                        <S.WatchButton src={watchButton} alt='um botão com gradiente vermelho escrito "assista agora" '/>
                    </S.BrandAndWatchButton>
            </S.MainContentDiv>
        </S.Div>
    );
}