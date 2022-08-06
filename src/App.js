import React,{useEffect} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";
import Clients from "./pages/clients/clients";
import Home from "./pages/home/home";
import Work from "./pages/work/work";
function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
              {/* <Navabr/> */}
              <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Home/>} />
              <Route path="/us" element={<Home/>} />
              <Route path="/clients" element={<Clients/>} />
              <Route path="/work" element={<Work/>} />
              {/* <Route path="/" element={<Home/>} /> */}

              </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
