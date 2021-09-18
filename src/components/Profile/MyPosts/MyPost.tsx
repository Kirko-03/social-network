import React from 'react';
import Post from './Post/Post'
import {PostType} from '../../../redux/store';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../validators/validators";
import { ButtonStyle } from '../../../Forms/Button';

type MyPostProps = {
    posts: Array<PostType>
    addPosts: (NewTextPost: string) => void
}
type FormDataType = {
    addPosts: (NewTextPost: string) => void
    NewTextPost: string

}

type AddFormType = {
    NewTextPost: string
}
const length = maxLengthCreator(30)
const MyPostForm: React.FC<InjectedFormProps<FormDataType, {}, string>> = (props) => {
    return (
        <div>
            <div>
                My post
            </div>
            <form onSubmit={props.handleSubmit}>
                <Field placeholder={"Enter anything"} name={"NewTextPost"} component={'textarea'}
                       validate={[required, length]}/>
                <button style={ButtonStyle}>add post</button>

            </form>
        </div>
    )
}
const MyPost: React.ComponentType<MyPostProps> = React.memo(props => {
    let posts = props.posts

    const onAddPosts = (values: AddFormType) => {
        if (values.NewTextPost)
            props.addPosts(values.NewTextPost)
        values.NewTextPost = ''

    }
    let PostElem = posts.map(p => <Post message={p.message} like={p.like}/>)
    return (
        <div>
            <MyPostRedux onSubmit={onAddPosts}/>
            {PostElem}
        </div>
    )
})
const MyPostRedux = reduxForm<FormDataType>({form: "addPost"})(MyPostForm)

export default MyPost;
