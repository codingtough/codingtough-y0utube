import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';



function Header() {
   const [inputSearch, setInputSearch] = useState("");

   return (
      <div className="header">

         <div className="header__left">
            <MenuIcon fontSize="large" />
            <Link  to="/">
               <img 
                  className="header__logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png" 
                  alt="Youtube"
               />
            </Link>
         </div>

         <div className="header__input">
            <input 
               value={inputSearch}
               onChange={e => setInputSearch(e.target.value)}
               type="text"
               placeholder="Search"
            />
            <Link className="header__inputButton" to={`/search/${inputSearch}`}>
               <SearchIcon fontSize="large"/>
            </Link>
         </div>

         <div className="header__icons">
            <VideoCallIcon className="header__icon" fontSize="large" />
            <AppsIcon className="header__icon" fontSize="large" />
            <NotificationsIcon className="header__icon" fontSize="large" />
            <Avatar 
               className="header__avatar"
               src="https://i.pravatar.cc/300"
               alt="codingtough"
            />
         </div>

      </div>
   );
}

export default Header;
