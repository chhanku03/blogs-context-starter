import { useContext, useEffect } from 'react';
import './App.css';
import Blogs from './Components/Blogs';
import Header from './Components/Header';
import Pagination from './Components/Pagination';
import { AppContext } from './Context/AppContext';

export default function App() {

    const{fetchBlogPost}=useContext(AppContext);

    useEffect(()=>{
         fetchBlogPost();
    },[])
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-y-7'>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}
