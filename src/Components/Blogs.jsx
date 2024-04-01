import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {

    const{posts,loading}=useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[630px] flex flex-col gap-y-4 mt-[65px] mb-16'>
         {
            loading ? (<Spinner/>):(
                posts.length===0 ?(
                    <div><p>No post found</p></div>
                ):(
                    posts.map((post)=> (
                         <div key={post.id}>
                            <p className='font-bold text-md'>{post.title}</p>
                            <p className='text-[12px] italic'>
                                By <span>{post.author}</span> on <span className='font-bold underline'>{post.category} </span>
                            </p>
                            <p className='text-[12px] '>
                                Posted on <span>{post.date} </span>
                            </p>
                            <p className='text-[12px] mt-2'>
                                <span>{post.content} </span>
                            </p>
                             <div className='flex gap-3 text-blue-700 text-[10px]  underline mt-1  '>
                                {
                                    post.tags.map((tag,index)=>{
                                        return <span key={index}>{`#${tag}`}</span>
                                    })
                                } 
                             </div>

                         </div>
                    ))
                )
            )
         }
    </div>
  )
}

export default Blogs