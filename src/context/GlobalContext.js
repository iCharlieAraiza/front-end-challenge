import React, {createContext} from "react";
import { useState, useEffect} from "react";
import {useFetch} from "../hooks/useFetch";
import useModal from "../hooks/useModal"


export const GlobalContext = createContext({
    data: [],
    isLoading: true,
    error: false,
    trigger: true,
    getCurrentPost: () => {},
    addNewPost: () => {},
    isShowing: false,
    toggle: () =>{}
});


export const GlobalProvider = (props) => {
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts")
    const [trigger, setTrigger] = useState('')
    const [ data, isLoading, error, setData ] = useFetch(url, trigger);
    const {isShowing, toggle} = useModal()


    console.log("First Reload")

    const getCurrentPost = (id) => {
        return data?.find((item) => item.id === id);
    }

    const addNewPost = (newPost) => {
        setData([...data, newPost])
    }


    return (
        <GlobalContext.Provider value={{data, isLoading, error, getCurrentPost, addNewPost, isShowing, toggle}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
