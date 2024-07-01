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

export const Section = styled.section`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: lightgray;
    padding: 0.5% 1% ;
`