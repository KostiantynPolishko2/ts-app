import styled from 'styled-components';

export const MenuWrapper = styled.div`
`;

const Display = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Navigation = styled(Display)`
    background-color: lightgreen;
    margin: 5px auto;
    padding: 5px;
    width: 95%;
`;