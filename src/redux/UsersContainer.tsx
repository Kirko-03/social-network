import {connect} from "react-redux";
import Users from "../components/Users/Users";
import {RootReduxState} from "./redux-store";
import Preloader from "../components/preloader/preloader";
import {
    follow,
    InitialStateType,
    setCurrentPage,
    setLoadItem, setToggleFriends,
    setTotalUserCount,
    setUsers,
    unfollow,
    UserPageType
} from "./usersReducer";
import React from "react";
import {usersAPI} from "../api/api";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getLoadItem,
    getPageSize,
    getTotalUserCount,
    getUser
} from "./usersSelector";




type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
    loadItem: boolean
    followingInProgress:any[]
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    setUsers: (users: Array<UserPageType>) => void
    setLoadItem: (loadItem: boolean) => void
    setTotalUserCount: (totalUserCount: number) => void
setToggleFriends:(loadItem: boolean,userId:number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setLoadItem(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data:any) => {
                this.props.setTotalUserCount(data.totalCount)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.setLoadItem(true)
        usersAPI.getUsers(this.props.currentPage).then((data:any) => {
            this.props.setLoadItem(false)
            this.props.setUsers(data.items);
        })

    }

    render() {
        return <>

            <Users
                followingInProgress={this.props.followingInProgress}
                setToggleFriends={this.props.setToggleFriends} follow={this.props.follow} unfollow={this.props.unfollow} pageSize={this.props.pageSize}
                   totalUserCount={this.props.totalUserCount} currentPage={this.props.currentPage}
                   usersPage={this.props.usersPage} onPageChanged={this.onPageChanged}/>
            {this.props.loadItem ?<Preloader/>:null}
                   </>
    }
}
debugger
let mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        usersPage: getUser(state),
        pageSize: getPageSize(state),
        totalUserCount:getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        loadItem:getLoadItem(state),
        followingInProgress:getFollowingInProgress(state)
    }
}


export default compose(connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, {
    follow, unfollow,
    setUsers, setCurrentPage, setTotalUserCount, setLoadItem,setToggleFriends
})(UsersContainer))

