import React, { FC } from "react";
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';


const FormMenu: FC = () => {
    return (
        <BrowserRouter>
            <Menu/>
        </BrowserRouter>
    );
}

export default FormMenu;