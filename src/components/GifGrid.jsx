import { GitItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({categoria}) =>{
    const { imaAdd, isLoading } = useFetchGifs( categoria )

    return(
        <div>
            <h3>{categoria}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className='card-grid'>
                {
                    imaAdd.map((image)=>
                    <GitItem 
                        key={image.id}
                        { ...image }
                        />
                    )
                } 
            </div>
        </div>
    )
}