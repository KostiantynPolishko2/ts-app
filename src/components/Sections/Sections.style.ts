import styled from "styled-components";

export interface IBoxProps {
    _bgColor?: string,
    _color?: string
}

export const SectionWrapper = styled.section`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const SizeBox = styled.div`
    width: 95vw;
    padding: 0.5% 1% ;
`;

export const DisplayBox = styled(SizeBox)<IBoxProps>`
    background-color: ${props => props._bgColor || 'lightgrey'};
    & > p {
        color: ${props => props._color || 'black'};
    } 
`;