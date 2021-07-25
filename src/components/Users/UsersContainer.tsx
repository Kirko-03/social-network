import {connect} from "react-redux";

import {RootReduxState} from "../../redux/redux-store";
import Preloader from "../preloader/preloader";
import {
    follow,
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


type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalItemsCount: number
    currentPage: number
    loadItem: boolean
    followingInProgress: any[]
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    setUsers: (users: Array<UserPageType>) => void
    setLoadItem: (loadItem: boolean) => void
    setTotalItemsCount: (totalItemsCount: number) => void
    setToggleFriends: (loadItem: boolean, userId: number) => void
    getUsers: (page: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        // const {currentPage, pageSize} = this.props
        // this.props.getUsers(currentPage, pageSize)
        //вот так круче по феншую что выше
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (<div>

            <Users
                followingInProgress={this.props.followingInProgress}
                setToggleFriends={this.props.setToggleFriends} follow={this.props.follow} unfollow={this.props.unfollow}
                pageSize={this.props.pageSize}
                totalItemsCount={this.props.totalItemsCount} currentPage={this.props.currentPage}
                usersPage={this.props.usersPage} onPageChanged={this.onPageChanged}/>
            {this.props.loadItem ? <Preloader/> : null}
        </div>)
    }
}

let mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
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
    setUsers, setCurrentPage, setTotalItemsCount, setLoadItem, setToggleFriends, getUsers
})(UsersContainer))

