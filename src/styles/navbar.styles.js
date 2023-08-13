import { styled } from "styled-components";


export const Navbar = styled.div`
    position: fixed;
    top: 0;
    background-color: rgba(10, 10, 10, 0.8);
    height: 40px;
    width: 100%;
    border-bottom: 1px solid rgba(192, 192, 192, 0.5);
    z-index: 100;
`;

export const NavbarLinks = styled.span`
    cursor: pointer;
    color: white;
    font-weight: 600;
    transition: color 0.25s ease;

    &:hover {
        color: ${({theme}) => theme.colors.secondary_alt};
        transform: scale(1.05, 1.05);
    }
`;