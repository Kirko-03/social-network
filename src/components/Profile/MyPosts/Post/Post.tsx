import React, { useState } from 'react';
import s from './Post.module.css'; 
import userPhoto from "../../../../nophoto.png";
type PostPropsType = {
    message:string
    like:number
}
const Post = (props:PostPropsType) => {
    const [like,setLike] = useState(props.like)
    return (
        <div className={s.item}>
            <img src={userPhoto}></img>
            {props.message}

            <div>
                <span >like {like}</span>
                
                {props.like===like ? <span onClick={()=>setLike(props.like+1)} style={{ margin:'5px'}}>♥</span>:<span onClick={()=>setLike(props.like)} style={{ margin:'5px',color:'red'}}>♥</span>}
            </div>
        </div>
    )
}
export default Post;