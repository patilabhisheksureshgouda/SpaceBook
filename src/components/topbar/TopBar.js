import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import "./topBar.css";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { MdOutlineChat } from "react-icons/md";



class TopBar extends Component {

    render() {
        return (
            
                <div className="topbarConatiner">  
                <div className="topBarLeft">
                    <span className="logo">SpaceBook</span>
                </div>
                <div className="topBarCenter">
                    <div className="searchBar">
                    <FaSearch className="searchIcon" />
                    <input type="text" placeholder="Search Here"  className="searchInput"/>
                    </div>
                </div>

                <div className="topBarRight">
                    <div className="topBarLinks">
                        {/* <div className="topBarLink">HomePage</div>
                        <div className="topBarLink">TimeLine</div> */}
                        <span className="topBarLink" > Homepage</span>
                        <span className="topBarLink" >Timeline</span>
                    </div>

                    <div className="topBarIcons">
                    <div className="topBarIconItem"> 
                     <IoPersonCircleSharp /> 
                    <span className="topBarIconBadge">97</span>
                    </div>

                    <div className="topBarIconItem"> 
                    <RiNotificationBadgeFill />
                    <span className="topBarIconBadge">17</span>
                    </div>

                    <div className="topBarIconItem"> 
                    <MdOutlineChat />
                    <span className="topBarIconBadge">18</span>

                    </div>
                    </div>
                    <img className="topBarImage" src="rajat.jpg" alt="rajat" />           
                </div>
                </div>
           
        );
    }


}
export default TopBar;