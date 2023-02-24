import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import {Routes, Route, Link} from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to='/' style={{textDecoration:'none'}}>Home</Link></li>
        <li><Link to='/about' style={{textDecoration:'none'}}>About</Link></li>
        <li><Link to='/products' style={{textDecoration:'none'}}>Products</Link></li>
      </ul>
      <hr/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
