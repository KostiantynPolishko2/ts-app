import { FC } from 'react';
import { Display, NavigationWrapper } from './Navigation.styled';
import 'the-new-css-reset';
import './Navigation.css';

import Pagimagic from 'react-pagimagic'

interface NavigationProps {}
interface ArrowProps {}

const Navigation: FC<NavigationProps> = () => {
   const users = ['home', 'contact', 'about', 'hello', 'world', '2024', 'console', 'log', 'C++', 'WinAdmin', 'C#', 'HTML', 'CSS', 'JS', 'TS', 'React'];

   const myArr = (array: Array<string>)  => {
      return array.map(item => {       
         return (
         <NavigationWrapper className='card-currency'>
            <p>card {item}</p>
         </NavigationWrapper>);
      });
   }

   const Forward: FC<ArrowProps> = () => <span className='my-arrow'><p>GO TO</p></span>

   return (
      <>
         <h3>Pagimagic module test</h3>
            <Pagimagic
               list={users}
               itemsPerPage={5}
               currentPageIndex={0}
               className="full-view"
               maximumVisiblePaginators={3}
               showCounter={true}
               arrow={Forward}
               renderChildren={myArr}
               useDefaultStyles={true}
            >
            </Pagimagic>
      </>
   );
}

export default Navigation;
