import React,{useEffect} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";
import Clients from "./pages/clients/clients";
import Home from "./pages/home/home";
import VideoPage from "./pages/video-page/VideoPage";
import WorkCategory from "./pages/work-category/work-category";
import Work from "./pages/work/work";
import { BodyStyles } from './styles/styles';
function App() {
  return (
    <>
    <BrowserRouter>
    <BodyStyles />
     <Routes>
              {/* <Navabr/> */}
              <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Home/>} />
              <Route path="/us" element={<Home/>} />
              <Route path="/clients" element={<Clients/>} />
              <Route path="/work" element={<Work/>} />
              <Route path="/work/:slug" element={<WorkCategory/>} />
              <Route path="/myworks" element={<VideoPage/>} />
              {/* <Route path="/" element={<Home/>} /> */}

              </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
