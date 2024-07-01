import React, { FC } from 'react';
import { SectionWrapper } from './Sections.style';
import { INavProps } from '../Menu/IMenu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';

interface SectionProps extends INavProps {

}

const Section: FC<SectionProps> = (props) => {
    return (
        <SectionWrapper>
            <Routes>
               <Route path={props.home} element={<Home/>}/>
               <Route path={props.about} element={<About/>}/>
               <Route path={props.contact} element={<Contact/>}/>
            </Routes>
        </SectionWrapper>
    );
}

export default Section;