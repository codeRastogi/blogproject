import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ClipLoader from "react-spinners/ClipLoader"

const Blogs = () => {

    const { loading, posts } = useContext(AppContext);

    return (
        <div className='flex flex-col r h-full bg-sky-900 pt-5 pb-5 gap-10'>
            {loading ? (
                <div className=' flex h-screen items-center justify-center'>
                    <ClipLoader
                        size={220}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : (
                posts.legth === 0 ? (
                    <p>No Post Found</p>
                ) :
                    (
                        posts.map((post) => (
                            <div 
                            className='h-full flex flex-col pl-5'
                            key={post.id}>
                                <p className='text-yellow-200 font-bold font-serif'>{post.title}</p>
                                <p className='text-yellow-100 font-serif'>
                                    By <span>{post.author}</span> on <span>{post.category}</span>
                                </p>
                                <p className='text-yellow-50'> Posted on {post.date}</p>
                                <p className='text-gray-100'>{post.content}</p>

                                <div className='text-sky-400 justify-between'>{post.tags.map((tag, index) => (
                                    <span className='mr-2' key={index}>{`#${tag}`}</span>
                                ))}</div>
                            </div>
                        ))
                    )
            )}
        </div>
    )
}

export default Blogs