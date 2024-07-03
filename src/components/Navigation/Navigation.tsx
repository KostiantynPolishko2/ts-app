import { FC, ReactHTMLElement, ReactNode } from 'react';
import { Display, NavigationWrapper } from './Navigation.styled';
import 'the-new-css-reset';
import './Navigation.css';
import Pagimagic from 'react-pagimagic'

interface NavigationProps {}
interface ArrowProps {}

type TCurrency = {
   rateBuy?: number | string,
   RateSell?: number | string,
   currencySymbol?: string,
}

const currencyPagination = (arr: Array<TCurrency>) => (
   arr.map((item, index) => (
      <>
         <NavigationWrapper className='card-currency'>
            <h3>Item&emsp;{index + 1}</h3>
            <p style={{backgroundColor: 'red'}}>sell:&emsp;{item?.RateSell || 'none'}</p>
            <p style={{backgroundColor: 'green'}}>buy:&emsp;{item?.rateBuy || 'none'}</p>
            <p style={{backgroundColor: 'gray'}}>kind:&emsp;{item?.currencySymbol || 'none'}</p>
         </NavigationWrapper>
      </>
   ))
)

const Navigation: FC<NavigationProps> = () => {
   const users = ['home', 'contact', 'about', 'hello', 'world', '2024', 'console', 'log', 'C++', 'WinAdmin', 'C#', 'HTML', 'CSS', 'JS', 'TS', 'React'];

   const currencies: Array<TCurrency | null> = [
      {rateBuy: 1, RateSell: 10, currencySymbol: 'USD'},
      {rateBuy: 2, RateSell: 20, currencySymbol: 'EUR'},
      {rateBuy: 3, RateSell: 30, currencySymbol: 'PLN'},
      {rateBuy: 3, RateSell: 40, currencySymbol: 'GBP'},
      {rateBuy: 5, RateSell: 50, currencySymbol: 'CHF'},
      {rateBuy: 6, RateSell: 60, currencySymbol: 'RUB'},
      {rateBuy: 7, RateSell: 70, currencySymbol: 'BYN'},
      {rateBuy: 8, RateSell: 80, currencySymbol: 'NOK'},
      {rateBuy: 9, RateSell: 90, currencySymbol: 'DKK'},
      {rateBuy: 10, RateSell: 100, currencySymbol: 'SEK'},
      {rateBuy: 11, RateSell: 110, currencySymbol: 'AUD'},
      {rateBuy: 12, RateSell: 120, currencySymbol: 'AMD'},
      {rateBuy: 13, RateSell: 130, currencySymbol: 'CAD'},
      {rateBuy: 14, RateSell: 140, currencySymbol: 'UZS'},
      {rateBuy: 15, RateSell: 150, currencySymbol: 'AED'},
      {rateBuy: 16, RateSell: 160, currencySymbol: 'CNY'},
      {rateBuy: 17, RateSell: 170, currencySymbol: 'TRY'},
      {rateBuy: 18, RateSell: 180, currencySymbol: 'AZN'},
   ]

   const Forward: FC<ArrowProps> = () => <span className='my-arrow'><p>GO TO</p></span>

   return (
      <>
         <h3>Pagimagic module test</h3>
            <Pagimagic
               list={currencies}
               itemsPerPage={5}
               currentPageIndex={0}
               className="full-view"
               maximumVisiblePaginators={3}
               showCounter={true}
               arrow={Forward}
               renderChildren={currencyPagination}
               useDefaultStyles={true}
            >
            </Pagimagic>
      </>
   );
}

export default Navigation;
