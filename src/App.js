import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SearchResult from './pages/SearchResult';
import Filters from './pages/Filters';
import MapPage from './pages/MapPage';
import Login from './pages/Login';
import SingleProperty from './pages/SingleProperty';
import Register from './pages/Register'

function App() {
  return (
      <BrowserRouter>  
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="properties/:location/*" element={<SearchResult />} /> 
            <Route path="property/:id" element={<SingleProperty />} />           
            <Route path="filters" element={<Filters />} />
            <Route path="map" element={<MapPage />} />
            <Route path="/register" element={<Register />} />
        </Routes>   
      </BrowserRouter>
  );
}

export default App;
