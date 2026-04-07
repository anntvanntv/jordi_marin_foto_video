import { useWordpress } from "../../hooks/useWordpress";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../../styles/pages.css";
import React from "react";


type WPPost = {
  id: number;
  title: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
};

export const PhotoReport = () => {
  const editorial: WPPost[] = useWordpress("report-foto");
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
        {editorial.map((item, i) => (
          <div className="elemento" key={item.id} onClick={() => {
            openLightbox((i));
          
          }}>
            
            <img src={item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""} 
            alt={item.title.rendered} 
            onLoad={handleImageLoad} />
          </div>
        ))}
    </section>

    <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={editorial.map(item => ({
            src: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          }))}
          index={currentIndex}
      />
  </>
);

};