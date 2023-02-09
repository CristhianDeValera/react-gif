
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ onCategory }) => {

    const { images, isLoading } = useFetchGifs(onCategory);

    return (
        <>
            <h3>{onCategory}</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image} />
                    ))
                }
            </div>
        </>
    )
}

// export default GifGrid


