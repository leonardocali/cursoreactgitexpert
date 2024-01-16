import { useState,useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoria) =>{

    const [imagenes,setImdAdd]=useState([]);
    const [isLoading,setisLoading]=useState(true);
    
    const getImaApi = async() => {
        const newImages = await getGifs(categoria);
        //console.log(newImages)
        setImdAdd(newImages);
        setisLoading(false);
    }
    //Cuando el segundo parametro del UseEffect es el arreglo vacio indica que solo se va cargar una sola vez.
    useEffect(()=>{
        getImaApi();
    }, []);

    return{
        imaAdd:imagenes,
        isLoading
    }
}