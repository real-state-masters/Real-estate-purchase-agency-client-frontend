import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SearchResult from './pages/SearchResult';

function App() {
  return (
      <BrowserRouter>  
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="properties/:location/*" element={<SearchResult />} />            
        </Routes>   
      </BrowserRouter>
  );
}

export default App;
