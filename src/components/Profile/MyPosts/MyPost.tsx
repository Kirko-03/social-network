import React, {ChangeEvent} from 'react';
import Post from './Post/Post'
import {PostType, profilePageType} from '../../../redux/store';
import {Field, InjectedFormProps, reduxForm, SubmitHandler} from "redux-form";
import {maxLengthCreator, required} from "../../../validators/validators";
import {Textarea} from "../../../Forms/FormComponents";




type MyPostProps = {
    posts: Array<PostType>
    addPosts: (NewTextPost: string) => void
}
// newTextChangeHandler: (body: string) => void
type FormDataType = {
    addPosts: (NewTextPost: string) => void
    NewTextPost:string

}

type AddFormType={
    NewTextPost:string
}
const length = maxLengthCreator(30)
const MyPostForm :React.FC<InjectedFormProps<FormDataType, {}, string>> =(props)=> {
    return (
        <div>
            <div>
                <a>My post</a>
            </div>
            <form onSubmit={props.handleSubmit}>
                <Field placeholder={"Введите что-нибудь"} name={"NewTextPost"} component={Textarea} validate={[required,length]} />
<button>Оставить пост</button>

            </form>
        </div>
    )
}
const MyPost:React.ComponentType<MyPostProps> = (props)=>{
    let posts = props.posts

    const onAddPosts = (values:AddFormType)=> {
        if(values.NewTextPost)
            props.addPosts(values.NewTextPost)
        values.NewTextPost=''

    }
    /*    let NewTextPost = profilePage.NewTextPost*/

    let PostElem =posts.map(p => <Post message={p.message} like={p.like}/>)

    // const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = e.target.value
    //     props.newTextChangeHandler(body)
    //
    // }
    return(
        <div>
            <MyPostRedux onSubmit={onAddPosts}/>
            {PostElem}
        </div>
    )
}
const MyPostRedux=reduxForm<FormDataType>({form:"addPost"})(MyPostForm)

export default MyPost;
