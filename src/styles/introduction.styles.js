import styled from 'styled-components';

import { FlexContainer, } from './globals.styles';

export const ImageCard = styled.div`
    width: 256px;
    height: 256px;
    border: 1px solid white;
    border-radius: 20px;
`;

export const IntroductionSection = styled(FlexContainer)`
    height: 100vh;

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        height: auto;
        row-gap: 15px;
    }
`;

export const IntroductionContent = styled(FlexContainer)`
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        flex-direction: column;
        padding-top: 50px;
    }
`;

export const PromotionIcons = styled(FlexContainer)`

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        align-items: center;
        margin-bottom: 20px;
    }
`;

export const DownloadCvButton = styled.button`
    cursor: pointer;
    border-radius: 10px;
    width: 125px;
    height: 40px;
    font-size: 1.01rem;
    background-color: ${({theme}) => theme.colors.secondary_alt};
    color: ${({theme}) => theme.colors.primary};

    &:hover {
        background-color: black;
        color: white;
        box-shadow: 0px 0px 4px white;
    }
`;