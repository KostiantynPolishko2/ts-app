import React, { FC } from 'react';
import MenuWrapper from './Menu.styled';
import { INavProps } from './IMenu';
import { Link } from 'react-router-dom';

interface MenuProps extends INavProps{

}

const Menu: FC<MenuProps> = (props) => {
 
   return (
      <MenuWrapper>
         <Link to={props.home} style={{color: 'white'}}>Home btn</Link>
         <Link to={props.about} style={{color: 'red'}}>About btn</Link>
         <Link to={props.contact} style={{color: 'blue'}}>Contact btn</Link>      
      </MenuWrapper>
   );
}

export default Menu;
