import React, {createContext} from "react";
import { useState} from "react";
import {useFetch} from "../hooks/useFetch";


export const GlobalContext = createContext({
    data: [],
    isLoading: true,
    error: false,
    trigger: true,
    getCurrentPost: () => {},
    addNewPost: () => {},
    isShowing: false,
    setIsShowing: () =>{},
    deletePost: () => {},
    updatePost: () => {}
});


export const GlobalProvider = (props) => {
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts")
    const [trigger, setTrigger] = useState('')
    const [ data, isLoading, error, setData ] = useFetch(url, trigger);
    const [isShowing, setIsShowing] = useState(false);

    const getCurrentPost = (id) => {
        return data?.find((item) => item.id === id);
    }

    const addNewPost = (newPost) => {
        setData([...data, newPost])
    }

    const deletePost = (id) => {
        const newData = data.filter((item) => item.id !== id)
        setData(newData)
    }

    const updatePost = (id, updatedPost) => {
        const newData = data.map((item) => {
            if(item.id === id) {
                return updatedPost
            }
            return item
        })
        setData(newData)
    }

    return (
        <GlobalContext.Provider value={{data, isLoading, error, getCurrentPost, addNewPost, isShowing, setIsShowing, deletePost, updatePost}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
