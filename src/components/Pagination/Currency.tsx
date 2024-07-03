import React, {FC} from 'react';
import { PaginationWrapper } from  './Pagination.styled';
import './Pagination.css';

export type CurrencyProps = {
    rateBuy?: number | string,
    RateSell?: number | string,
    currencySymbol?: string,
}

export type ItemCurrency = {
    _index?: number | 0,
    _item: CurrencyProps | null,
}

export const Currency: FC<ItemCurrency> = (props) => (
    <PaginationWrapper className='card-currency'>
        <h2>Item&emsp;{props?._index || 0}</h2>
        <p style={{backgroundColor: 'red'}}>sell:&emsp;{props._item?.RateSell || 'none'}</p>
        <p style={{backgroundColor: 'green'}}>buy:&emsp;{props._item?.rateBuy || 'none'}</p>
        <p style={{backgroundColor: 'gray'}}>kind:&emsp;{props._item?.currencySymbol || 'none'}</p>
    </PaginationWrapper>
)

export const currencies: Array<CurrencyProps | null> = [
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