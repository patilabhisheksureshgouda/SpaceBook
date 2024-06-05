import "./post.css";
import React from 'react';
import { MdOutlineMoreVert } from "react-icons/md";
import { Users } from "../../data";
export default function Post({post}) {
    const user=Users.filter(u => u.id === 1)
     console.log(user[0].userName===1)
    
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture}alt="rajat" className="postprofileimg"/>
                        <span className="postusername">{Users.filter((u) => u.id === post.userId)[0].userName}</span>
                        <span className="postdate">{post.date}</span>
                    </div>
                    <div className="posttopright">
                    <MdOutlineMoreVert className=""/>
                    </div>
                </div>
                <div className="postcenter">
                    <span className="posttext">{post.desc}</span>
                    
                    <img src={post.photo} alt="" className="postimg"/>
                </div>
                <div className="postbottom">
                    <div className="postbuttonleft">
                    <img src="heart.png" alt="" className="hearticon" />
                    <img src="like.png" alt=""  className="likeicon"/>
                    <span className="postlikecounter">{post.like} people like it</span>
                    </div>
                    <div className="postbuttonright">
                    <span className="postcommenttext">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
