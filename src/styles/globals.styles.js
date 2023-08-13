import styled from 'styled-components';

export const ContentContainer = styled.div`
    background-color: ${({theme}) => theme.colors.primary};
    width: 100%;
    overflow: hidden;
`;

export const PaddingContainer = styled.div`
    padding-top: ${({$top}) => $top};
    padding-bottom: ${({$bottom}) => $bottom};
    padding-left: ${({$left}) => $left};
    padding-right: ${({$right}) => $right};
    padding: ${({$padding}) => $padding};
`;

export const FlexContainer = styled(PaddingContainer)`
    display: flex;
    justify-content: ${({$justify}) => $justify};
    align-items: ${({$align}) => $align};
    gap: ${({$gap}) => $gap};
    row-gap: ${({$gapy}) => $gapy};
    column-gap: ${({$gapx}) => $gapx};
    flex-direction: ${({$direction}) => $direction};
    height: ${({$height}) => $height};
    flex-wrap: ${({$wrap}) => $wrap};
    height: ${({$height}) => $height};
    border: ${({$border}) => $border};
    flex: ${({$flex}) => $flex};
    width: ${({$width}) => $width};

    & > div {
        flex: ${({$childFullWidth}) => $childFullWidth && 1};
    };
`;

export const IconContainer = styled.div`
    font-size: ${({$size}) => $size};
    color: ${({$color, theme}) => {
        switch($color){
            case 'accent-white':
                return theme.colors.accent_white;
            case 'secondary':
                return theme.colors.secondary;
            case 'primary':
                return theme.colors.primary;
            default:
                return $color;
        }
    }};
    cursor: ${({$cursor}) => $cursor};
    transition: color 0.25s ease-in-out;

    &:hover {
        color: ${({$hoverColor}) => $hoverColor};
    }
`;

export const Heading = styled(PaddingContainer)`
    color: white;
    text-align: ${($align) => $align};
    font-size: ${({$type}) => {
        switch($type) {
            case 'h1':
                return '4rem';
            case 'h2':
                return '3.5rem';
            case 'h3':
                return '3.25rem';
            case 'h4':
                return '2rem';
            case 'h5':
                return '1.5rem';
            case 'h6':
                    return '1.25rem';
            default: return;
        }
    }};

    text-align: ${({$alignText}) => $alignText};
`;

export const GreenishText = styled.span`
    color: ${({theme}) => theme.colors.secondary};
`;

export const BlueLightVariant = styled.span`
    color: ${({theme}) => theme.colors.secondary_alt};
`;

export const Paragraph = styled(PaddingContainer)`
    color: ${({theme}) => theme.colors.accent_white};
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: ${({$alignText}) => $alignText}
`;