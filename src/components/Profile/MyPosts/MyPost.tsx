import React, {ChangeEvent} from 'react';
import Post from './Post/Post'
import {profilePageType} from '../../../redux/store';

type MyPostProps = {
    profilePage: profilePageType
    addPosts: () => void
    newTextChangeHandler: (body: string) => void

}
const MyPost = (props: MyPostProps) => {
    let profilePage = props.profilePage

    const addPosts = () => {
        props.addPosts()
    }
    let NewTextPost = profilePage.NewTextPost

    let PostElem = profilePage.posts.map(p => <Post message={p.message} like={p.like}/>)

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.newTextChangeHandler(body)

    }
    return (
        <div>
            <div>
                <a>My post</a>
            </div>
            <textarea placeholder={"Введите что-нибудь"} value={NewTextPost} onChange={newTextChangeHandler}/>
            <button onClick={addPosts}>add post</button>
            {PostElem}
        </div>
    )
}
export default MyPost;