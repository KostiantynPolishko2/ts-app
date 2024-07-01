import React, { FC } from 'react';
import { MenuWrapper, Navigation } from './Menu.styled';
import { Link } from 'react-router-dom';
import Section from './Sections/Sections';

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
 
   return (
      <MenuWrapper>
         <Navigation>
            <Link to={'/home'} style={{color: 'white'}}>Home btn</Link>
            <Link to={'/about'} style={{color: 'red'}}>About btn</Link>
            <Link to={'/contact'} style={{color: 'blue'}}>Contact btn</Link>
         </Navigation>
         <Section home='/home' about='/about' contact='/contact'/>
      </MenuWrapper>
   );
}

export default Menu;
