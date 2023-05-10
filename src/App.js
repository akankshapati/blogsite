import './App.css';
import Navbar from './components/Navbar/Navbar';
import Initial from './pages/Home/Initial';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllBlogs from './pages/AllBlogs/AllBlogs';
import Posts from './components/Cards/Posts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Initial />}></Route>
          <Route exact path='/Allblogs' element={<AllBlogs />}></Route>
          <Route exact path='/posts/:postId' element={<Posts  />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
