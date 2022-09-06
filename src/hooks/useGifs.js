import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs'

export const useGifs = (category) => {
    const [Images, setImages] = useState([]);
    const [isLoading, setLoading] = useState([true]);

    const getImages = async()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setLoading(false);
    }
    useEffect(()=>{
        getImages();
    },[]);

    return {
        Images,
        isLoading
    }
}
