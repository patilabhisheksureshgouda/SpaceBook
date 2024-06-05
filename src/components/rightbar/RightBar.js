import "./rightbar.css"
function RightBar(){

    return(
        <div className="RightBar">
            <div className="rightbarwrapper">
                <div className="birthdaycontainer">
                    <img src="gift.jpeg" alt="gift" className="birthdayimg" />
                    <span className="birthdaytext" > <b> Virat Kohli</b> and <b>2 Other Friends </b> Birthday have today</span>
                </div>
                <img className="rightbarad" src="ads2.jpg" alt="" />
                <h4 className="rightbartitle">Online Friends</h4>
                <ul className="friendlist">
                    <li className="rightbarfriend">
                        <div className="rightbarprofileimgcontainer">
                            <img src="will.png" alt="will jakes" className="rightbarprofileimg" />
                            <span className="rightbaronline"></span>
                        </div>
                        <span className="rightbarusername">Will Jacks</span>
                    </li>
                    <li className="rightbarfriend">
                        <div className="rightbarprofileimgcontainer">
                            <img src="abd.jpg" alt="will jakes" className="rightbarprofileimg" />
                            <span className="rightbaronline"></span>
                        </div>
                        <span className="rightbarusername">AB Devilliers</span>
                    </li>
                    <li className="rightbarfriend">
                        <div className="rightbarprofileimgcontainer">
                            <img src="rohit.webp" alt="will jakes" className="rightbarprofileimg" />
                            <span className="rightbaronline"></span>
                        </div>
                        <span className="rightbarusername">Rohit Sharma</span>
                    </li>
                    <li className="rightbarfriend">
                        <div className="rightbarprofileimgcontainer">
                            <img src="virat.png" alt="will jakes" className="rightbarprofileimg" />
                            <span className="rightbaronline"></span>
                        </div>
                        <span className="rightbarusername">Virat Kohli</span>
                    </li>
                </ul>  
            </div>
        </div>
    );
}
export default RightBar;