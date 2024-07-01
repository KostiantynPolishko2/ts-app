import React, { FC, ReactElement } from 'react';
import { DisplayBox } from './Sections.style';
import {Route, Routes} from 'react-router-dom';
import { BtnLink } from '../Menu/Menu.styled';
import Home from '../Sections/Home'

const About: FC = (): ReactElement => {
    return(
        <DisplayBox _bgColor='lightgreen' _color='red'>
            <p>About page</p>
        <BtnLink to={'/home'}>Home</BtnLink>
        <Routes>
            <Route path='/home' element={<Home/>}/>
        </Routes>
        </DisplayBox>
    );
}

export default About;