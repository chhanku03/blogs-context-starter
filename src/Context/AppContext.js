import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";

export   const AppContext=createContext();

  export function AppContextProvider({children})
{
    const [loading,SetLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);

     async function fetchBlogPost(page=1)
     {
        SetLoading(true);
        let url=`${baseUrl}?page=${page}`;
        try {
            const result= await fetch(url);
            const data=await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        } 
        catch (error) 
        {
           console.log("error in fetching data");
           setPage(1); 
           setPosts([]);
           setTotalPages(null);
        }

        SetLoading(false);
    
    }
        function handlePageChange(page)
        {
            fetchBlogPost(page);

        }

     

    const value={
        posts,
        setPosts,
        loading,SetLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handlePageChange,
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}