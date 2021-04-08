import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message:string
    like:number
}
const Post = (props:PostPropsType) => {
    return (
        <div className={s.item}>
            <img src='https://kuban24.tv/wp-content/uploads/2020/02/zoomzoom.jpg'></img>
            {props.message}

            <div>
                <span>like {props.like}</span>
            </div>
        </div>
    )
}
export default Post;