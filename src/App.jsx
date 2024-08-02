import { useState } from "react";

import "./App.css";
import Video from "./Video/Video";
import { VIDEOS } from "./videos";

function App() {
    return (
        <>
            <div className="video-container">
                
                {VIDEOS.map((video) => (
                    <Video  key={video.id} title={video.title} Name={video.Name} img={video.img} />
                ))}
            </div>
        </>
    );
}

export default App;
