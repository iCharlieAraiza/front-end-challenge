import React, {createContext} from "react";
import { useState, useEffect} from "react";


export const GlobalContext = createContext({
    data: [],
    isLoading: true,
    error: false,
    trigger: true
});


export const GlobalProvider = (props) => {
    const [url, setUrl] = React.useState("https://jsonplaceholder.typicode.com/posts")
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        try {
            const fetchData = async () => {
                setIsLoading(true);
                try {
                    const response = await fetch(url, { signal });
                    const data = await response.json();
                    setData(data);
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
        }
        catch (err) {
            console.log(err)
        }
        return () => {
            abortController.abort();
        };
    },[url]);

    if(isLoading){
        console.log("Loading")
    }else {
        console.log(data)
    }



    return (
        <GlobalContext.Provider value={{data, isLoading, error}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
