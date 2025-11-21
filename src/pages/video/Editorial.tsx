import { useVideos } from '../../hooks/useVideos';
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "../../styles/pages.css";
import React from "react";

export const VideoEditorial = () => {

  const { editorial } = useVideos();
  const [ open, setOpen ] = React.useState(false);
  const [ currentIndex, setCurrentIndex ] = React.useState<number>(0);

  const openLightbox = (index: number) =>{
    setCurrentIndex(index);
    setOpen(true);
  }


  return (
    <>
       <section className="gallery videogall" >
          {editorial.map((src, i) => (
            <div className="elemento videoelem" key={i} onClick={() => {
              openLightbox((i));
            }}>
              <video src={src} controls={false} />
            </div>
          ))}
       </section>


       <Lightbox
          plugins={[Video]}
          open={open}
          close={() => setOpen(false)}
          slides={editorial.map((src) => ({
            type:"video",
            width:1280,
            height:720,
            sources: [
              {
                src: src,
                type: "video/mp4",
              }
            ],
          
         }))}
          index={currentIndex}
       />

    </>
  )
}