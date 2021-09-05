import React, { useState } from 'react';
import s from './Post.module.css'; 
import userPhoto from "../../../../nophoto.png";
type PostPropsType = {
    message:string
    like:number
}
const Post = (props:PostPropsType) => {
    const [like,setLike] = useState(props.like)
    function funcLike(like:number,color:string){
        return <span onClick={()=>setLike(props.like+like)} style={{ margin:'5px',color:color}}>♥</span>
    }
    return (
        <div className={s.item}>
            <img src={userPhoto}></img>
            {props.message}
            <div>
                <span>like{like}</span>
                {props.like===like ? funcLike(1,'gray'):funcLike(0,'red')}
            </div>
        </div>
    )
}
export default Post;