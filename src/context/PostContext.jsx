import { createContext, useEffect, useState } from 'react'

export const PostContext = createContext()
export function PostContextProvider({ children }) {

    const [posts, setPosts] = useState([])

    function addNewPost(post) {
        setPosts([...posts, {
            title: post.title,
            text: post.text,
            image: post.image
        }])

    }

    useEffect(() => {
    }, [])

    return (
        <PostContext.Provider value={{ addNewPost, posts }}>
            {children}
        </PostContext.Provider>
    )
}

