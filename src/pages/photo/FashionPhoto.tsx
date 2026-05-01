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


export const PhotoFashion = () => {
  const fashion: WPPost[] = useWordpress("fashion-foto");
  const [ open, setOpen ] = React.useState(false);
  const [  currentIndex, setCurrentIndex ] = React.useState<number>(0);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const { naturalWidth, naturalHeight } = e.currentTarget;
        const parent = e.currentTarget.parentElement;

        if (!parent) return;

        parent.classList.remove("horizontal", "vertical");
        parent.classList.add(naturalWidth > naturalHeight ? "horizontal" : "vertical");
  }

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  }


  return (
    <>
    <section className="gallery">
        {fashion.map((item, i) => (
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
      slides={fashion.map(item => ({
        src: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
      }))}
      index={currentIndex}
    />

    </>
    
  )
}