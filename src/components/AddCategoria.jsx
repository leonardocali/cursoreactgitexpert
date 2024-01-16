import { useState } from "react";

export const AddCategoria=({onCategoria})=>{
    
    const[valorInput,setInputValue]= useState('');

    const ingresaDato = (value) =>{
        setInputValue( value.target.value )
        //console.log(value.target.value)
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if( valorInput.trim().length <=2 ) return;
        //setCategorias(categorias =>[valorInput,...categorias])
        onCategoria(valorInput.trim())
        setInputValue('');
    }
    return(
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ valorInput }
                onChange={ ingresaDato }
            />
        </form>
    )
}