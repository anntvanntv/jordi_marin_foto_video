//  import { useState } from "react"; 
import { useWebFotos } from "../../hooks/useWebFotos";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../../styles/pages.css";
import React from "react";

export const PhotoEditorial = () => {
  const { editorial } = useWebFotos();
 const [ open, setOpen ] = React.useState(false);
 const [ currentIndex, setCurrentIndex ] = React.useState<number>(0); 


  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    
   

    if (naturalWidth > naturalHeight) {
      e.currentTarget.parentElement!.className = "horizontal";
    } else {
      e.currentTarget.parentElement!.className = "vertical";
    }
    
    
  }


const openLightbox = (index: number) =>{ 
  setCurrentIndex(index);
  setOpen(true);
}


  
  return (
    <>



      <section className="gallery">
        {editorial.map((src, i) => (
          <div className="elemento" key={i} onClick={() => {
            openLightbox((i));
          
          }}>
            
            <img src={src} alt={`foto ${i + 1}`} onLoad={handleImageLoad} />
          </div>
        ))}
      </section>

 
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={editorial.map((src) => ({src}))}
          index={currentIndex}
        />
      
    </>
  );
};

