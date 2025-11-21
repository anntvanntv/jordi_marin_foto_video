import { useState, useEffect } from 'react';
import { client } from "../contentful";


type Cines = {
    editorial: string[];
    report: string[];
    fashion: string[];
    travel: string[];
}


const parseVideos = (arr: any[]): string[] => {
    if (!Array.isArray(arr)) return [];
    return arr
      .map((video: any) => video?.fields?.videoReproductor?.fields?.file?.url)
      .filter(Boolean)
      .map((url: string) => (url.startsWith("//") ? `https:${url}` : url));
  };



export const useVideos = () => {
    const [videos, setVideos] = useState<Cines>({
        editorial: [],
        report: [],
        fashion: [],
        travel: [],
    });

    useEffect (() => {
       const fetchVideos = async () => {
            try {
                const res = await client.getEntries({
                    content_type: "cine",
                    include: 2,
                });

                if (!res.items.length) {
                    console.warn("⚠️ No se encontró ninguna galería de videos en Contentful");
                    return;
                }

                const cine = res.items[0].fields as {
                    cineEditorial?: any[] | null;
                    cineReport?: any[] | null;
                    cineFashion?: any[] | null;
                    cineTravel?: any[] | null;
                };

                setVideos ({
                    editorial: parseVideos(cine.cineEditorial ?? []),
                    report: parseVideos(cine.cineReport ?? []),
                    fashion: parseVideos(cine.cineFashion ?? []),
                    travel: parseVideos(cine.cineTravel ?? []),
                }); 

            } catch (err) {
                console.error("Error cargando galería de videos:", err);
            }
       
    };
    fetchVideos();

    
}, []);

    return videos;

}