import "./centerbar.css"
import  Share from '../share/Share';
import Post from "../post1/Post"; 
import { Posts } from "../../data";
function CenterBar(){
    return(
        <div className="centerbar">
            <div className="centerbarwrapper">
                <Share/>
                {Posts.map((p)=>(<Post key={p.id} post={p}/>)
                )}
            </div>
        </div>
        
    );
}
export default CenterBar;
