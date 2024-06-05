import "./share.css";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaTag, FaLocationDot } from "react-icons/fa6"
import { BsEmojiSunglasses } from "react-icons/bs";

function Share(){
    var style1 ={ color: "Red"};
    var style2 ={ color: "Blue"};
    var style3 ={ color: "green"};
    var style4 ={ color: "yellowgreen"};

    return(
        <div className="share" >
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="rajat.jpg" alt="rajat"  className="shareprofileimg"/>
                <input placeholder="share your thoughts" className="shareinput"/>
            </div>
            <hr className="sharehr"/>
            <div className="shareButton">
                <div className="shareoptions">
                    <div className="shareoption">
                    <MdOutlinePermMedia style ={style1} className="shareicon"/>
                        <span className="shareoptiontext" >Photo/Video</span>
                    </div>

                    <div className="shareoption">
                    <FaTag style ={style2}  className="shareicon"/>
                        <span className="shareoptiontext" >Tag</span>
                    </div>
                    <div className="shareoption">
                    <FaLocationDot style ={style3}  className="shareicon"/>
                        <span className="shareoptiontext" >Location</span>
                    </div>
                    <div className="shareoption">
                    <BsEmojiSunglasses style ={style4} className="shareicon"/>
                        <span className="shareoptiontext" >Feelings</span>
                    </div>
                </div>
                <button className="shareButton1">Share</button>
            </div>
        </div>
        
        </div>
    );
}
export default Share;
