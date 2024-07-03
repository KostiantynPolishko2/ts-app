import styled from 'styled-components';

export const Display = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const NavigationWrapper = styled.div`
    width: fit-content;
    margin: 5px;
    padding: 2px 5px;
    border: 1px solid black;
    background-color: gray;
    & > p {
        color: white;
        font-size: 600;
    }
`;
