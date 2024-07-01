import React, { FC } from 'react';
import PixaBayGallery from "./PixaBayGallery";

interface FormGalleryProps {}

const FormGallery: FC<FormGalleryProps> = () => {

    const _imgLinks = [
        { src: './img/bmw_x3_2017.jpg', alt: 'bmw_x3_2017.jpg'}, 
        { src: './img/car_come_soon.jpg', alt: 'car_come_soon.jpg'}, 
        { src: './img/car_icon.jpg', alt: 'car_icon.jpg'}, 
        { src: './img/error404.jpg', alt: 'error404.jpg'}, 
        { src: './img/load.png', alt: 'load.png'}
     ]

    return (
        <>
            <h3>PixaBay lightGallery Component</h3>
            <PixaBayGallery imgLinks={_imgLinks}/>
        </>
    );
}

export default FormGallery;