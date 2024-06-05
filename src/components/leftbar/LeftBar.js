import "./leftbar.css";

import { MdOutlineRssFeed, MdChat, MdGroups, MdBookmarks, MdWorkOutline, MdEvent } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { LiaVideoSolid } from "react-icons/lia";
import { FaUserGraduate } from "react-icons/fa";


function LeftBar() {
    return (
        <div className="LeftBar" >
            <div className="leftbarwrapper">

                <ul className="leftbarlist" >

                    <li className="leftbarlistitems" >
                        <MdOutlineRssFeed className="leftbaricon" />
                        <span className="leftbarlistitemtext" >Feed</span>

                    </li>
                    <li className="leftbarlistitems" >
                        <MdChat className="leftbaricon" />
                        <span className="leftbarlistitemtext" >Chat</span>
                    </li>

                    <li className="leftbarlistitems" >
                        <LiaVideoSolid className="leftbaricon" />
                        <span className="leftbarlistitemtext" >Videos</span>
                    </li>

                    <li className="leftbarlistitems" >
                        <MdGroups className="leftbaricon" />
                        <span className="leftbarlistitemtext" >Groups</span>
                    </li>
                    <li className="leftbarlistitems" >
                        <MdBookmarks className="leftbaricon" />
                        <span className="leftbarlistitemtext" >BookMarks</span>
                    </li>
                    <li className="leftbarlistitems" >
                        <BsFillQuestionSquareFill className="leftbaricon" />
                        <span className="leftbarlistitemtext" >Questions</span>
                    </li>
                    <li className="leftbarlistitems" >
                        <MdWorkOutline className="leftbaricon" />
                        <span className="leftbarlistitemtext" >Jobs</span>
                    </li>
                    <li className="leftbarlistitems" >
                        <MdEvent className="leftbaricon" />
                        <span className="leftbarlistitemtext" >Event</span>
                    </li>
                    <li className="leftbarlistitems" >
                        <FaUserGraduate className="leftbaricon" />
                        <span className="leftbarlistitemtext" >Courses</span>
                    </li>
                </ul>

                <button className="leftbarbutton" >Show More</button>
                <hr className="leftbarhr"/>

                <ul className="leftbarfriendlist" >

                <li className="leftbarfriend">
                    <img className="leftbarfriendimg" src="abd.jpg" alt="abd" />
                    <span>ab devilliers</span>
                </li>
                <li className="leftbarfriend">
                    <img className="leftbarfriendimg" src="rohit.webp" alt="abd" />
                    <span>Rohit sharma</span>
                </li>
                <li className="leftbarfriend">
                    <img className="leftbarfriendimg" src="virat.png" alt="abd" />
                    <span>Virat Kohli</span>
                </li>
                <li className="leftbarfriend">
                    <img className="leftbarfriendimg" src="will.png" alt="abd" />
                    <span>Will Jacks</span>
                </li>

                </ul>
            </div>
        </div>
    );
}
export default LeftBar;
