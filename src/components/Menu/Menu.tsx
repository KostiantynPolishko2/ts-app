import React, { FC } from 'react';
import { MenuWrapper, Navigation, Section } from './Menu.styled';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Sections/Home';
import About from './Sections/About';
import Contact from './Sections/Contact';

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
 
   return (
      <MenuWrapper>
         <Navigation>
            <Link to={'/home'} style={{color: 'white'}}>Home btn</Link>
            <Link to={'/about'} style={{color: 'red'}}>About btn</Link>
            <Link to={'/contact'} style={{color: 'blue'}}>Contact btn</Link>
         </Navigation>
         <Section>
            <Routes>
               <Route path='/home' element={<Home/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/contact' element={<Contact/>}/>
            </Routes>
         </Section>
      </MenuWrapper>
   );
}

export default Menu;
