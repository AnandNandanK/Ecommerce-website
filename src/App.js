import Header from "./Component/Header";
import {Routes,Route} from 'react-router-dom';
import Cards from "./Component/Cards";
import Cart from './Component/Cart'

function App() {
  
  // console.log('App data', data);

  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Cards/>}></Route>
        <Route path='/home' element={<Cards/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
