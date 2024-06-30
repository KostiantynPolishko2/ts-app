import React, { FC } from 'react';
import './PixaBayGallery.css';
import { PixaBayGalleryWrapper } from './PixaBayGallery.styled';

import Lightgallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

interface PixaBayGalleryProps {}

const PixaBayGallery: FC<PixaBayGalleryProps> = () => {

   // const onInit = () => {
   //    alert('Welcome to lightGallery')
   // }

   return (
      <>
         <PixaBayGalleryWrapper>
            <h2>PixaBay lightGallery Component</h2>
            <Lightgallery
               // onInit={onInit}
               speed={500}
               plugins={[lgZoom, lgThumbnail]}
            >
               <a href={require('./img/bmw_x3_2017.jpg')}>
                  <img src={require('./img/bmw_x3_2017.jpg')} alt='bmw_x3_2017'></img>
               </a>
               <a href={require('./img/car_come_soon.jpg')}>
                  <img src={require('./img/car_come_soon.jpg')} alt='car_come_soon'></img>
               </a>
               <a href={require('./img/car_icon.jpg')}>
                  <img src={require('./img/car_icon.jpg')} alt='car_icon'></img>
               </a>
               <a href={require('./img/error404.jpg')}>
                  <img src={require('./img/error404.jpg')} alt='error404'></img>
               </a>
               <a href={require('./img/load.png')}>
                  <img src={require('./img/load.png')} alt='load'></img>
               </a>
            </Lightgallery>
         </PixaBayGalleryWrapper>
      </>
   );
}

export default PixaBayGallery;
