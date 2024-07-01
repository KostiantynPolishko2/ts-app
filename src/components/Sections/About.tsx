import React, { FC, ReactElement } from 'react';
import { DisplayBox } from './Sections.style';

const About: FC = (): ReactElement => {
    return(
        <DisplayBox _bgColor='lightgreen' _color='red'>
            <p>About page</p>
        </DisplayBox>
    );
}

export default About;