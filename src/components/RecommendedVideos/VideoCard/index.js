import React from 'react';
import './VideoCard.css';
import { Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function VideoCard({ title, channel, channelImage, views, timestamp, image }) {
   return (
      <div className="videoCard">
         <img className="videoCard__thumbnail" src={image} alt=""/>
         <div className="videoCard__info">
            <Avatar 
               className="videoCard__avatar" 
               src={channelImage} 
               alt={channel} 
            />
            <div className="videoCard__text">
               <h4>{title}</h4>
               <p>{channel}</p>
               <p>{views} &middot; {timestamp}</p>
            </div>
            <MoreVertIcon className="videoCard__icon" />
         </div>
         
      </div>
   )
}

export default VideoCard;