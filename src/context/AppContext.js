import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext = createContext();


function AppContextProvider(childrens) {
    const [pageNumber, setPageNumeber] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(null);
    

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        pageNumber,
        setPageNumeber,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };


    async function fetchBlogPosts(page = 1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setPageNumeber(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);

        } catch (error) {

            console.log("Failed to fetch")
            setPageNumeber(1);
            setTotalPages(null);
            setPosts([]);        
        }

        setLoading(false);
    }

    function handlePageChange(page){
        setPageNumeber(page);
        fetchBlogPosts(page);
    }
}