import { createContext, useEffect, useState } from 'react'

export const PostContext = createContext()



export function PostContextProvider({ children }) {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const posts = []

    function addPost(post) {
        setTitle([...post])
    }

    useEffect(() => {
    }, [])

    const postObject = {
        title,
        text,
    }

    return (
        <PostContext.Provider postObject={postObject}>
            {children}
        </PostContext.Provider>
    )
}
