import { styled } from "styled-components";
import { FlexContainer } from "./globals.styles";

export const ProjectThumbnail = styled.div`
    height: 300px;
    border: 1px solid white;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
`;

export const ThumbnailTint = styled.div`
    position: absolute;
    background-color: black;
    opacity: 0.1;
    z-index: 20;
    width: 100%;
    height: 100%;
`;

export const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    column-gap: 50px;

    & > div {
        flex: 1;

        @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
            flex: initial;
        }
    }
    
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        flex-direction: column;
        flex: initial !important;
        row-gap: 20px;
        justify-content: flex-start;
        padding-left: 0;
        padding-right: 0;
    }
`;

export const ProjectLinks = styled(FlexContainer)`

    &:hover .icon {
        &:hover {
            color: green;
            transform: scale(1.05,1.05);
        }
    }
`;

export const TechCard = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({$color}) => $color};
    padding: 5px;
    border-radius: 5px;
`;

export const PageButton = styled.button`
    cursor: ${({$cursor}) => $cursor};
    padding: 2px 5px;
    border: ${({$border}) => $border};
    font-size: 1.1rem;
    border-radius: 5px;
    color: ${({$color}) => $color};
    background-color: ${({$bg}) => $bg};
`;