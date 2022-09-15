import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
const data=[
    {
        id:1,
        title:"Lorem, ipsum.",
        desc:"Lorem, ipsum.Lorem, ipsum.",
        imgUrl:"https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
        id:2,
        title:"Lorem, ipsum.",
        desc:"Lorem, ipsum.Lorem, ipsum.",
        imgUrl:"https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
    },
    {
        id:3,
        title:"Lorem, ipsum.",
        desc:"Lorem, ipsum.Lorem, ipsum.",
        imgUrl:"https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
        id:4,
        title:"Lorem, ipsum.",
        desc:"Lorem, ipsum.Lorem, ipsum.",
        imgUrl:"https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
]
const VideoPage = () => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get(
        "https://api.giphy.com/v1/gifs/search?api_key=14wgihD1T4G8kNvnxdFvhqZCC8kKZPvL&q=shoes&limit=2&offset=1&rating=g&lang=en"
      )
      .then((response) => {
        console.log(response);
        // let obj=response.data
        setGifs(response.data.data);
        // console.log(obj);
        // setGifs(obj)
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  console.log(gifs);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  if(window.location.pathname === '/myworks'){
    document.body.style.backgroundColor = "#EEE2CD"
}
  return (
    <>
      <div className="video-page">
        <div className="video-page-container">
          <h1>My work</h1>
          <div class="photo-grid">
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} class="card card-tall card-wide">1
            {isHovering &&(

                <motion.div initial={{ opacity: 0, x: -70 }}
                animate={{ opacity: 1, x: 0 }}
                // transition={{  }}
                exit={{ opacity: 0, x: -70 }} className="hover-content">
                    <h1>Lorem, ipsum.</h1>
                    <p>Lorem ipsum dolor sit </p>
                </motion.div>
                    )}
            </div>
            <div class="card card-tall">2</div>
            <div class="card">3</div>
            <div class="card">4</div>
            <div class="card">5</div>
            <div class="card">6</div>
            <div class="card card-wide">7 
            <div className="card-details hover-content">
                <h1>Lorem, ipsum.</h1>
                <p>Lorem ipsum dolor sit </p>
            </div>
            </div>
            <div class="card">8</div>
            <div class="card">9</div>
            <div class="card">10</div>
            <div class="card">11</div>
            <div class="card">12</div>
          </div>
        </div>
        

        {/* <div className="another">
            {data.map((item)=>{
                return(
                    <>
                    <div className="video">
                    <img src={item.imgUrl} alt="" />
                    </div>
                    </>
                )
            })}
        </div> */}
      </div>
    </>
  );
};

export default VideoPage;
