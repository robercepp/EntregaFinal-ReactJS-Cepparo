import {BrowserRouter,Routes ,Route} from "react-router-dom";
import '../styles/App.css';
import { DarkModeProvider } from "../context/DarkModeContext";
import Navbar from './content/Navbar';
import ItemListContainer from './content/ItemListContainer';
import ItemDetailContainer from './content/ItemDetailContainer';
import Cart from "./content/Cart";
import Contacto from "./content/Contacto";
import Footer from "./content/Footer";
import FinderContainer from "./content/FinderContainer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InventoryProvider } from "../context/InventoryContext";
import CheckOut from "./content/CheckOut";



const App=()=> {
return (
<>
<DarkModeProvider>
  <InventoryProvider>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='*' element={<h1>Error 404 sitio no encontrado</h1>}/>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categories/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/search' element={<FinderContainer/>}/>
        <Route path='/search/:query' element={<FinderContainer/>}/>
        <Route path='/cart/checkout' element={<CheckOut/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  <ToastContainer/>
  </InventoryProvider>
  </DarkModeProvider>
</>
);
}

export default App;