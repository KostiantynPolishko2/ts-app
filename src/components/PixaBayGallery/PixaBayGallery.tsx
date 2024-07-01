import React, { FC, useEffect} from 'react';
import './PixaBayGallery.css';
import { PixaBayGalleryWrapper, Thumbnail } from './PixaBayGallery.styled';

import Lightgallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import fjGallery from 'flickr-justified-gallery';

interface PixaBayGalleryProps {}

interface ImgData {

}

const PixaBayGallery: FC<PixaBayGalleryProps> = () => {

   const img_links = [
      { src: './img/bmw_x3_2017.jpg', alt: 'bmw_x3_2017.jpg'}, 
      { src: './img/car_come_soon.jpg', alt: 'car_come_soon.jpg'}, 
      { src: './img/car_icon.jpg', alt: 'car_icon.jpg'}, 
      { src: './img/error404.jpg', alt: 'error404.jpg'}, 
      { src: './img/load.png', alt: 'load.png'}
   ]

   return (
      <>
         <PixaBayGalleryWrapper>
            <h3>PixaBay lightGallery Component</h3>
            <Lightgallery
               plugins={[lgZoom, lgThumbnail]}
               speed={500}
               mode='lg-fade'
               galleryId='pixabay'
               elementClassNames='gallery'
            >
               {
                  img_links.map((img, index) => (
                        <a 
                           data-lg-size = '500-500'
                           key={index}
                           data-src={require(`${img.src}`)}
                           data-sub-html='<h3>PixaBay thumbnail</h3>'
                        >
                           <Thumbnail src={require(`${img.src}`)} alt={img.alt}/>
                        </a>
                  ))
               }
            </Lightgallery>
         </PixaBayGalleryWrapper>
      </>
   );
}

export default PixaBayGallery;
