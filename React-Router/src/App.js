import './App.css';
import { Routes , Route , Link } from 'react-router-dom';
import Home from './Home';
import PostList from './PostList';
import PostDetalis from './PostDetalis';
import {PostsContext, posts} from './context/PostsContext';
import NotFound from './NotFound';





function App() {
  return (
  <PostsContext.Provider value={posts}>
    <div className="App">
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/posts">
        <button>Posts</button>
      </Link>
      <Link to="/art">
        <button>article</button>
      </Link>
    </div>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/posts" element={<PostList/>} />
        <Route path="/posts/:id/" element={<PostDetalis />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </div>
  </PostsContext.Provider>
  );
}

export default App;
