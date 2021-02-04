import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SearchResult from './pages/SearchResult';
import Filters from './pages/Filters';
import MapPage from './pages/MapPage';

function App() {
  return (
      <BrowserRouter>  
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="properties/:location/*" element={<SearchResult />} />            
            <Route path="filters" element={<Filters />} />
            <Route path="map" element={<MapPage />} />
        </Routes>   
      </BrowserRouter>
  );
}

export default App;
