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

    const handleVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement>) => {
      const { videoWidth, videoHeight } = e.currentTarget;
      const parent = e.currentTarget.parentElement;

      if (!parent) return;

      parent.classList.remove("horizontal", "vertical");
      parent.classList.add(videoWidth > videoHeight ? "horizontal" : "vertical");
    };


  return (
    <>
      <section className="gallery videogall">
         {fashion.map((item, i) => {
             const videoUrl = item.acf?.video;
             

             return (
              <div 
              className="elemento videoelem" 
              key={item.id} 
              onClick={() => {
              openLightbox((i));
            }}>
             <video src={`${videoUrl}#t=2` || ""} 
             muted 
             playsInline  
             preload="metadata"
             onLoadedMetadata={handleVideoLoad}
               />
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