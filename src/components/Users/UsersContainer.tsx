import {connect} from "react-redux";

import {RootReduxState} from "../../redux/redux-store";
import Preloader from "../preloader/preloader";
import {
    follow,
    friendsTab,
    getUsers,
    InitialStateType,
    setCurrentPage,
    setLoadItem,
    setToggleFriends,
    setTotalItemsCount,
    setUsers,
    unfollow,
    UserPageType
} from "../../redux/usersReducer";
import React from "react";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getLoadItem,
    getPageSize,
    getTotalItemsCount,
    getUser
} from "../../redux/usersSelector";
import {Users} from "./Users";
import { RouteComponentProps } from "react-router-dom";


type MapStateToPropsType = {
    friends:boolean
    usersPage: InitialStateType
    pageSize: number
    totalItemsCount: number
    currentPage: number
    loadItem: boolean
    followingInProgress: any[]
}
type MapDispatchToPropsType = {
    friendsTab:(friends:boolean)=>void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    setUsers: (users: Array<UserPageType>) => void
    setLoadItem: (loadItem: boolean) => void
    setTotalItemsCount: (totalItemsCount: number) => void
    setToggleFriends: (loadItem: boolean, userId: number) => void
    getUsers: (page: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType&RouteComponentProps

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }    
    render() {
        return (<div>
{this.props.loadItem ? 
    <Preloader/>:''}
            <Users
            friends={this.props.friends}
            friendsTab={this.props.friendsTab}
                followingInProgress={this.props.followingInProgress}
                setToggleFriends={this.props.setToggleFriends} follow={this.props.follow} unfollow={this.props.unfollow}
                pageSize={this.props.pageSize} setTotalItemsCount={this.props.setTotalItemsCount}
                totalItemsCount={this.props.totalItemsCount} currentPage={this.props.currentPage}
                usersPage={this.props.usersPage} onPageChanged={this.onPageChanged}/>
        </div>)
    }
}

let mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        friends:state.usersPage.friends,
        usersPage: getUser(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        loadItem: getLoadItem(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, {
    follow, unfollow,
    setUsers, setCurrentPage, setTotalItemsCount, setLoadItem, setToggleFriends, getUsers,friendsTab
})(UsersContainer))

