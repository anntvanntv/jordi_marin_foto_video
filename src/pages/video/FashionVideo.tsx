import { useWpvideo }  from "../../hooks/useWpvideo";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "../../styles/pages.css";
import React from "react";


type WPPost = {
  id: number;
  title: { rendered: string };

  acf?: {
    
    video?: string;
  };
};


export const VideoFashion = () => {
  
    const fashion: WPPost[] = useWpvideo("fashion-video");
    const [ open, setOpen ] = React.useState(false);
    const [ currentIndex, setCurrentIndex ] = React.useState<number>(0);

    const openLightbox = (index: number) =>{
      setCurrentIndex(index);
      setOpen(true);
    }

  return (
    <>
      <section className="gallery videogall">
         {fashion.map((item, i) => {
             const videoUrl = item.acf?.video;
             console.log("ITEM", item);

             return (
              <div 
              className="elemento videoelem" 
              key={item.id} 
              onClick={() => {
              openLightbox((i));
            }}>
             <video src={videoUrl || ""} muted playsInline />
            </div>
            )})}

      </section>

      <Lightbox
  plugins={[Video]}
  open={open}
  close={() => setOpen(false)}
  index={currentIndex}
  slides={fashion.map((item) => {
    const videoUrl = item.acf?.video;

    return {
      type: "video",
      width: 1280,
      height: 720,
      sources: [
        {
          src: videoUrl || "",
          type: "video/mp4",
        },
      ],
    };
  })}
/>
  
    </>
  )
}