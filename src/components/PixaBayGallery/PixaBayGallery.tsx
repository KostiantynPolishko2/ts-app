import React, { FC, useEffect} from 'react';
import './PixaBayGallery.css';
import { PixaBayGalleryWrapper, Thumbnail } from './PixaBayGallery.styled';

import Lightgallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import fjGallery from 'flickr-justified-gallery';

interface ImgDate {
   src: string,
   alt: string,
}

interface PixaBayGalleryProps {
   imgLinks: ImgDate[]
}

const PixaBayGallery: FC<PixaBayGalleryProps> = (props) => {

   return (
      <>
         <PixaBayGalleryWrapper>
            <Lightgallery
               plugins={[lgZoom, lgThumbnail]}
               speed={500}
               mode='lg-fade'
               galleryId='pixabay'
               elementClassNames='gallery'
            >
               {
                  props.imgLinks.map((img, index) => (
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
