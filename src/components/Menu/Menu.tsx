import React, { FC } from 'react';
import MenuWrapper, { Btn, BtnLink } from './Menu.styled';
import { INavProps } from './IMenu';

interface MenuProps extends INavProps{

}

const Menu: FC<MenuProps> = (props) => {
 
   return (
      <MenuWrapper>
         <BtnLink to={props.home} _bgColor='grey' _color='white'>Home btn</BtnLink>
         <BtnLink to={props.about} _bgColor='green' _color='red' >About btn</BtnLink>
         <BtnLink to={props.contact} _bgColor='gold' _color='blue'>Contact btn</BtnLink>      
      </MenuWrapper>
   );
}

export default Menu;
