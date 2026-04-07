import { useState, useEffect } from "react";

type WPPost = {
    id: number;
    title: { rendered: string };
    _embedded?: {
      "wp:featuredmedia"?: { source_url: string }[];
    };
  }; 

export const useWordpress = (tipo: string) => {
    const [items, setItems] = useState<WPPost[]>([]);


    useEffect(() => {
        fetch(`https://jmp-studiobcn.com/wp-json/wp/v2/${tipo}?_embed`)
             .then(res => res.json())
             .then(data => setItems(data))
             .catch(err => console.error(err));
    }, [tipo]);

    return items;
};