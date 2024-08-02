import { useState } from "react";
import "./Video.css";

const Video = (props) => {
    const { title, Name, img } = props;

    const [likesCount, setLikesCount] = useState(0);
    const likesClick = () => {
        setLikesCount(likesCount + 1);
    };
    return (
        <div className="video">
            <img className="video-img" src={img} alt="" />
            <p>{title}</p>
            <p>{Name}</p>
            <div className="video-footer">
                <p>Лайки: {likesCount}</p>
                <button onClick={likesClick}>Лайк</button>
            </div>
        </div>
    );
};

export default Video;
