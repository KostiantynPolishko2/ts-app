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

   const img_links = ['./img/bmw_x3_2017.jpg', './img/car_come_soon.jpg', './img/car_icon.jpg', './img/error404.jpg', './img/load.png']

   return (
      <>
         <PixaBayGalleryWrapper>
            <h3>PixaBay lightGallery Component</h3>
            <Lightgallery
               // onInit={onInit}
               plugins={[lgZoom, lgThumbnail]}
               speed={500}
               mode='lg-fade'
               galleryId='pixabay'
               elementClassNames='gallery'
            >
               <a 
                  data-lg-size = '500-500'
                  data-src = {require('./img/bmw_x3_2017.jpg')}
                  data-sub-html = '<h3>Hello world!</h3>'
               >
                  <img 
                     src={require('./img/bmw_x3_2017.jpg')} alt='bmw_x3_2017'></img>
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
