import { useState } from "react";
import { AddCategoria, GifGrid } from "./components";

export const GifApp =() => {
    const[categorias,setCategorias]= useState([]);
    //console.log(categorias);
    const addCategoria = (nuevaCategoria) =>{
        //console.log(typeof(nuevaCategoria))
        if(categorias.includes(nuevaCategoria.toLowerCase())) return;
        //setCategorias(categorias.concat('Prueba'))
        setCategorias([nuevaCategoria,...categorias])
    }
    return(
        <>
            {/*Titulo*/}
            <h1>Git Expert</h1>
            {/*Input*/}
            <AddCategoria 
                //Opcion1
                //setCategorias={setCategorias}
                //Opcion2
                //onCategoria = { addCategoria }
                //Opcion3
                onCategoria = { event => addCategoria(event) }
            />
            {/*Listado de  Gif*/}
            {/*<button onClick={addCategoria}>Adicionar <i className="fa-solid fa-layer-group"></i></button>*/}
            
            {
                categorias.map((categoria)=>(
                    <GifGrid 
                        key={ categoria } 
                        categoria={ categoria }
                    />
                ))
            }
        </>
    )
}