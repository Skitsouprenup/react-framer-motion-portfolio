import { styled, keyframes } from "styled-components";
import { FlexContainer } from "./globals.styles";

export const SkillsContainer = styled(FlexContainer)`
    height: 100vh;

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        height: auto;
        flex-direction: column-reverse;
    }
`;

export const SkillCardContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 15px;
    justify-items: center;

    @media only screen and (max-width: 625px) {
        grid-template-columns: auto;
    }
`;

const scaleIcon = keyframes`
    0%   { transform: scale(1,1); }
    50%  { transform: scale(1.1,1.1); }
    100% { transform: scale(1,1); }
`;

export const SkillCard = styled.div`
    width: 100%;
    border-radius: 10px;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 10px;
    transition: background-color 0.25s ease-out;

    &:hover {
        background-color: ${({theme}) => theme.colors.accent_white};
    }

    &:hover h5 {
        color: black;
    }

    &:hover div {
        &:hover {
            animation-name: ${scaleIcon};
            animation-duration: 1s;
            animation-iteration-count: infinite;
        }
    }

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        height: 200px;
    }
`;