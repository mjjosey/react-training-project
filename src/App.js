import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent';
import FunctionalComp from './functionalComponent/functionalComp';
import { Route, BrowserRouter, Routes, Link, NavLink } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Posts from './posts';
import PostDetails from './postDetails';
import NotFoundComp from './notFound';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
   {/* <FirstComponent name = "className" item1 = "item1" item2 = "item2" />
   <FirstComponent name = "function" /> */}
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link" to="/contact" >Contact</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link" to="/posts" >Posts</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   {/* <FunctionalComp name = "className" item1 = "item1" item2 = "item2" /> */}

   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/posts/:id" element={<PostDetails />} />
   <Route path="/posts" element={<Posts />} />
   <Route path="*" element={<NotFoundComp />} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
