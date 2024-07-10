//import React, {useState,useEffect} from 'react';
import ImageGallery from 'react-photo-album';
import './Collage.css';


export const Collage = ({images}) => {

  
  return (
    <div className='image-gallery'>
      <ImageGallery layout='rows' photos={images}/>
    </div>
  )
}

export default Collage;