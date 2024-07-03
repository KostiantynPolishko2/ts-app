import { FC } from 'react';
import { Display, NavigationWrapper } from './Navigation.styled';
import 'the-new-css-reset';

import Pagimagic from 'react-pagimagic'

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
   const users = ['home', 'contact', 'about', 'hello', 'world', '2024', 'console', 'log', 'C++', 'WinAdmin', 'C#', 'HTML', 'CSS', 'JS', 'TS', 'React'];

   const myArr = (array: [])  => {
      return array.map(item => {       
         return (
         <NavigationWrapper>
            <p>card {item}</p>
         </NavigationWrapper>);
      });
   }

   return (
      <>
         <h3>Pagimagic module test</h3>
            <Pagimagic
               list={users}
               itemsPerPage={3}
               currentPageIndex={0}
               className="your-class-if-its-necessary"
               maximumVisiblePaginators={3}
               renderChildren={myArr}
            >
            </Pagimagic>
      </>
   );
}

export default Navigation;
