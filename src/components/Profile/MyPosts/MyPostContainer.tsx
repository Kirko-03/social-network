import {addPostAC} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {PostType} from "../../../redux/store";
import {RootReduxState} from '../../../redux/redux-store';

type mapStateToPropsType = {
    posts: Array<PostType>
}
type  mapDispatchToPropsType = {
    addPosts: (NewTextPost: string) => void
}

let mapStateToProps = (state: RootReduxState): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}
const MapPostContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, {addPosts: addPostAC})(MyPost)
export default MapPostContainer;