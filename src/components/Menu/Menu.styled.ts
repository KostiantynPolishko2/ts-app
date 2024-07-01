import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface IBtnProps {
    _bgColor?: string,
    _color?: string
}

const Display = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const MenuWrapper = styled(Display)`
    background-color: lightsalmon;
    margin: 5px auto;
    padding: 5px;
    width: 95%;
`;

export const BtnLink = styled(Link)<IBtnProps>`
    padding: 0px 5px;
    border-radius: 5px;
    background-color: ${props => props._bgColor || 'lightgrey'};
    color: ${props => props._color || 'black'};
`;

export default MenuWrapper;