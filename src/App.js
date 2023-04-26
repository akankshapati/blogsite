import './App.css';
import Navbar from './components/Navbar/Navbar';
import Initial from './pages/Initial';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExploreBlog from './pages/ExploreBlog';
import AllBlogs from './pages/AllBlogs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Initial />}></Route>
          <Route exact path='/Exploreblog' element={<ExploreBlog />}></Route>
          <Route exact path='/Allblogs' element={<AllBlogs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
