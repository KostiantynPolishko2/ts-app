import styled from 'styled-components';

const Display = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const MenuWrapper = styled(Display)`
    background-color: lightgreen;
    margin: 5px auto;
    padding: 5px;
    width: 95%;
`;

export default MenuWrapper;