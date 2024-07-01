import React, { FC, ReactElement } from 'react';
import { DisplayBox } from './Sections.style';
import {Route, Routes} from 'react-router-dom';
import { BtnLink } from '../Menu/Menu.styled';
import Home from '../Sections/Home'

const Contact: FC = (): ReactElement => {
    return(
        <DisplayBox _bgColor='yellow' _color='blue'>
            <p>Contact page</p>
            <BtnLink to={'/home'}>Home</BtnLink>
            <Routes>
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </DisplayBox>
    );
}

export default Contact;