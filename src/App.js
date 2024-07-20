import { useContext, useEffect } from 'react';
import Blogs from './components/Blogs';
import Header from './components/Header';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';
import './App.css'
import './index.css'

function App() {
const{fetchBlogPosts} = useContext(AppContext);


useEffect(() => {
  fetchBlogPosts();
},[]);
  return (
    <div>
      <p className='6xl'>HAha</p>
      <Header/>
      <Blogs />
      <Pagination/>

    </div>
  );
}

export default App;
