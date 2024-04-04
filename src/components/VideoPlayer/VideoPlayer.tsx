import "./VideoPlayer.css"; 
import { Player } from 'video-react';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const VideoPlayer = (
    ) => {
        return (
            <div className="videoContainer">
          <FontAwesomeIcon icon={faPlayCircle} className="fas fa-play-circle" style={{width:"132px",height:"132px",color:"#18A0FB"}} />
          <p className="guide">Application guide</p>
          <div className="join">
            <p>Join today</p>
          </div>

                
  {/* <Player
    playsInline
    poster="/assets/poster.png"
    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  /> */}
</div>
        );
      };
    
    export default VideoPlayer;