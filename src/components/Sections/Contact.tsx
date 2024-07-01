import React, { FC, ReactElement } from 'react';
import { DisplayBox } from './Sections.style';

const Contact: FC = (): ReactElement => {
    return(
        <DisplayBox _bgColor='yellow' _color='blue'>
            <p>Contact page</p>
        </DisplayBox>
    );
}

export default Contact;