import React, { FC, ReactElement } from 'react';
import { DisplayBox } from './Sections.style';

const Home: FC = (): ReactElement => {
    return(
        <DisplayBox _bgColor='lightgrey' _color='gold'>
            <p>Home page</p>
        </DisplayBox>
    );
}

export default Home;