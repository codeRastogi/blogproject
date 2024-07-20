import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ClipLoader from "react-spinners/ClipLoader"

const Blogs = () => {

    const {loading, posts} = useContext(AppContext);
    console.log(loading);
    console.log(posts);
  return (
    <div>
       {loading?(<ClipLoader
       size={150}
       aria-label="Loading Spinner"
       data-testid="loader"
       />) :(
        posts.legth === 0 ? (
            <p>No Post Found</p>
        ):
        (
            posts.map((post) => (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <p>
                        By <span>{post.author}</span> on <span>{post.category}</span>
                    </p>
                    <p> Posted on {post.date}</p>
                    <p>{post.content}</p>

                    <div>{post.tags.map((tag, index) =>(
                        <span key={index}>{`#${tag}`}</span>
                    ))}</div>
                </div>
            ))
        )
       )}
    </div>
  )
}

export default Blogs