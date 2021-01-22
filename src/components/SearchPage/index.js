import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
   return (
      <div className="searchPage">
         <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <h2>Filter</h2>
         </div>
         <hr/>

         <ChannelRow
            image="https://i.pravatar.cc/1000"
            channel="codingtough"
            verified
            subs="660K"
            noOfVideos={392}
            description="You can find awesome landscape here! Also, expect traveling tips and tricks that will take your journey to the next level"
         />
         <hr/>
         <VideoRow
            views="1.4M"
            subs="659K"
            description="You can find awesome landscape here! Also, expect traveling tips and tricks that will take your journey to the next level"
            timestamp="3 days ago" 
            channel="codingtough" 
            title="Go to the most beautiful landscapes | 2020/2021" 
            image="https://images.unsplash.com/photo-1607161744726-e96856cfcf4f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
         />
         <VideoRow
            views="1.4M"
            subs="659K"
            description="You can find awesome landscape here! Also, expect traveling tips and tricks that will take your journey to the next level"
            timestamp="3 days ago" 
            channel="codingtough" 
            title="Go to the most beautiful landscapes | 2020/2021" 
            image="https://images.unsplash.com/photo-1607280209896-60e6975fd159?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
         />
         <VideoRow
            views="1.4M"
            subs="659K"
            description="You can find awesome landscape here! Also, expect traveling tips and tricks that will take your journey to the next level"
            timestamp="3 days ago" 
            channel="codingtough" 
            title="Go to the most beautiful landscapes | 2020/2021" 
            image="https://images.unsplash.com/photo-1607108003066-7728a0b79977?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
         />
         <VideoRow
            views="1.4M"
            subs="659K"
            description="You can find awesome landscape here! Also, expect traveling tips and tricks that will take your journey to the next level"
            timestamp="3 days ago" 
            channel="codingtough" 
            title="Go to the most beautiful landscapes | 2020/2021" 
            image="https://images.unsplash.com/photo-1605116188625-8522bf02d10f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
         />
         <VideoRow
            views="1.4M"
            subs="659K"
            description="You can find awesome landscape here! Also, expect traveling tips and tricks that will take your journey to the next level"
            timestamp="3 days ago" 
            channel="codingtough" 
            title="Go to the most beautiful landscapes | 2020/2021" 
            image="https://images.unsplash.com/photo-1606994829363-fb1ca4740eb6?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
         />
         <VideoRow
            views="1.4M"
            subs="659K"
            description="You can find awesome landscape here! Also, expect traveling tips and tricks that will take your journey to the next level"
            timestamp="3 days ago" 
            channel="codingtough" 
            title="Go to the most beautiful landscapes | 2020/2021" 
            image="https://images.unsplash.com/photo-1606990972809-f6dff5d17367?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
         />
         <VideoRow
            views="1.4M"
            subs="659K"
            description="You can find awesome landscape here! Also, expect traveling tips and tricks that will take your journey to the next level"
            timestamp="3 days ago" 
            channel="codingtough" 
            title="Go to the most beautiful landscapes | 2020/2021" 
            image="https://images.unsplash.com/photo-1607279644789-412da832599b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
         />
      </div>
   )
}

export default SearchPage;