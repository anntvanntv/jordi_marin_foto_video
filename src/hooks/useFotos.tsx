import { useState, useEffect } from 'react';


type Foto = {
    src: string;
    height: number;
    width: number | string;
}

export const useFotos = (clave:string) => {
    const [fotos, setFotos] = useState<Foto[]>([]);

    useEffect (() => {
        fetch("/data/fotos.json")
        .then((res) => res.json())
        .then((data) => setFotos(data[clave]))
        .catch((err) => console.error("Error cargando fotos:", err))
    }, [clave]);

    return fotos;


}