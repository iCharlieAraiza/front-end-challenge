import { useState, useEffect} from "react";
import { CATEGORIES } from "../utils/constants";

const getRandomCat = () => {
    const number = Math.floor(Math.random() * CATEGORIES.length) 
    return CATEGORIES[number]
}


export const useFetch = (url, trigger) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url, { signal });
                const data = await response.json();
                const cleanedData = data.map((item) => {
                    return {
                        id: item.id,
                        title: item.title,
                        body: item.body,
                        cat: getRandomCat()
                    };
                });
                setData(cleanedData);
                setIsLoading(false);
                setError(false);
            } catch (err) {
                if (err.name === "Abort Error") {
                    console.log("Fetch aborted");
                } else {
                    setError(true);
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            abortController.abort();
        };
    },[trigger, url]);
    return [ data, isLoading, error ];
}

export default useFetch