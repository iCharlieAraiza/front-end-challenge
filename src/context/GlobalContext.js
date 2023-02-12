import React, {createContext} from "react";
import { useState, useEffect} from "react";
import {useFetch} from "../hooks/useFetch";


export const GlobalContext = createContext({
    data: [],
    isLoading: true,
    error: false,
    trigger: true,
    getCurrentPost: () => {}
});


export const GlobalProvider = (props) => {
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts")
    const [trigger, setTrigger] = useState('')
    const [ data, isLoading, error ] = useFetch(url, trigger);

    console.log("First Reload")

    const getCurrentPost = (id) => {
        return data?.find((item) => item.id === id);
    }


    return (
        <GlobalContext.Provider value={{data, isLoading, error, getCurrentPost}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
