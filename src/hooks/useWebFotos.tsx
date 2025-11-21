import { useState, useEffect } from "react";
import { client } from "../contentful";

// Tipo de estructura que devolverá el hook
type Galerias = {
  editorial: string[];
  report: string[];
  fashion: string[];
  travel: string[];
};

//  Función auxiliar: convierte una lista de referencias en URLs
const parseFotos = (arr: any[]): string[] => {
  if (!Array.isArray(arr)) return [];
  return arr
    .map((foto: any) => foto?.fields?.imagen?.fields?.file?.url)
    .filter(Boolean)
    .map((url: string) => (url.startsWith("//") ? `https:${url}` : url));
};

export const useWebFotos = () => {
  const [fotos, setFotos] = useState<Galerias>({
    editorial: [],
    report: [],
    fashion: [],
    travel: [],
  });

  useEffect(() => {
    const fetchFotos = async () => {
      try {
        const res = await client.getEntries({
          content_type: "galeria", // el content_type de tu Contentful
          include: 2, // importante para traer las referencias
        });

        if (!res.items.length) {
          console.warn("⚠️ No se encontró ninguna galería en Contentful");
          return;
        }

        // Tipamos los fields para que TypeScript sepa qué esperar
        const galeria = res.items[0].fields as {
          galeriaEditorial?: any[] | null;
          galeriaReport?: any[] | null;
          galeriaFashion?: any[] | null;
          galeriaTravel?: any[] | null;
        };

        // Actualizamos el estado con seguridad
        setFotos({
          editorial: parseFotos(galeria.galeriaEditorial ?? []),
          report: parseFotos(galeria.galeriaReport ?? []),
          fashion: parseFotos(galeria.galeriaFashion ?? []),
          travel: parseFotos(galeria.galeriaTravel ?? []),
        });
      } catch (err) {
        console.error("Error cargando galería:", err);
      }
    };

    fetchFotos();
  }, []);

  return fotos;
};
