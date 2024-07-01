import React, { FC, useEffect} from 'react';
import './PixaBayGallery.css';
import { IPixaBayProps } from './IPixaBay';
import { PixaBayGalleryWrapper, Thumbnail } from './PixaBayGallery.styled';

import Lightgallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import fjGallery from 'flickr-justified-gallery';

const PixaBayGallery: FC<IPixaBayProps> = (props) => {

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
                  props.hits.map((img, index) => (
                        <a
                           data-lg-size = '500-500'
                           key={index}
                           data-src={img.previewURL}
                           data-sub-html='<h3>PixaBay thumbnail</h3>'
                        >
                           <Thumbnail src={img.previewURL} alt={img.user}/>
                        </a>
                  ))
               }
            </Lightgallery>
         </PixaBayGalleryWrapper>
      </>
   );
}

export default PixaBayGallery;
