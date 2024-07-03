import { FC } from 'react';
import { Currency } from './Currency'
import 'the-new-css-reset';
import Pagimagic from 'react-pagimagic'
import { currencies, CurrencyProps, ItemCurrency } from './Currency';
import { Forward } from './Arrow';

interface NavigationProps {}

const currencyPagination = (arr: Array<CurrencyProps>) => (
   arr.map((item, index) => (
      <Currency key={index+1} _index={index+1} _item={item}/>
   ))
)

const Navigation: FC<NavigationProps> = () => {

   return (
      <div style={{margin: 5+'px'}}>
         <div style={{backgroundColor: 'grey', textAlign: 'center'}}>
            <h3 style={{color: 'white', fontWeight: 700, paddingBottom: 3+'px'}}>Pagimagic module test</h3>
         </div>
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
      </div>
   );
}

export default Navigation;
