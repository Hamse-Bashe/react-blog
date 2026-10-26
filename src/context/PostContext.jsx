import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({children})=> {
    const [posts, setPosts] = useState([
        {
        id: 1,
        title: "React",
        content: "This is react post"
        },
        {
        id: 2,
        title: "JavaScript",
        content: "This is javaScript post"
        },
    ]);

    const create = (post)=> setPosts(prev => [...prev, {...post, id:prev.length + 1}]) 
    
    return (
        <PostContext.Provider value={{posts, create}}>
            {children}
        </PostContext.Provider>
    )
}