import { useState, useEffect } from 'react';

type WPPost = {
    id: number;
    title: { rendered: string };
    
    acf?: {
      video_url?: string;
    };
  };

export const useWpvideo = (tipo: string) => {
    const [items, setItems] = useState<WPPost[]>([]);
  
    useEffect(() => {
      const API = import.meta.env.VITE_WORDPRESS_API;
  
      fetch(`${API}/${tipo}?_embed&acf_format=standard`)
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(err => console.error(err));
    }, [tipo]);
  
    return items;
  };