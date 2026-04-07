import { useWordpress } from '../../hooks/useWordpress';
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "../../styles/pages.css";
import React from "react";


type WPPost = {
  id: number;
  title: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
}; 

export const VideoEditorial = () => {

   const editorial: WPPost[] = useWordpress("editorial-video");
  const [ open, setOpen ] = React.useState(false);
  const [ currentIndex, setCurrentIndex ] = React.useState<number>(0);

  const openLightbox = (index: number) =>{
    setCurrentIndex(index);
    setOpen(true);
  }


  return (
    <>
       <section className="gallery videogall">
          {editorial.map((item, i) => (
            <div className="elemento videoelem" key={item.id} onClick={() => {
              openLightbox((i));
            }}>
              <video src={item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""} muted playsInline />
            </div>
          ))}
       </section>


       <Lightbox
          plugins={[Video]}
          open={open}
          close={() => setOpen(false)}
          slides={editorial.map(item => ({
           
            type:"video",
            width:1280,
            height:720,
            sources: [
              {
                src: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "", 
                type: "video/mp4",
              }
            ],
          
          
         }))}
          index={currentIndex}
       />

    </>
  )
}