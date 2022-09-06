
import { useGifs } from "../hooks/useGifs";
import { ItemGif } from "./ItemGif";

export const GifGRid = ({category}) => {
    const  {Images,isLoading} = useGifs(category);  
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando.....</h2>)
            }
            <div className="card-grid">
                {Images.map((gif) =>(            
                    <ItemGif
                        key={gif.id}
                        {...gif}
                    />
                ))}
                
            </div>
        </>
        )
}
