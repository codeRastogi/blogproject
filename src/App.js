import { useContext, useEffect } from 'react';
import Blogs from './components/Blogs';
import Header from './components/Header';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';

function App() {
const{fetchBlogPosts} = useContext(AppContext);


useEffect(() => {
  fetchBlogPosts();
},[]);
  return (
    <div className='flex flex-col justify-evenly'>
      <Header />
      <Blogs />
      <Pagination/>

    </div>
  );
}

export default App;
