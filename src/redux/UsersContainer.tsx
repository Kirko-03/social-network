import {connect} from "react-redux";
import {Dispatch} from "redux";
import Users from "../components/Users/Users";
import {RootReduxState} from "./redux-store";
import Preloader from "../components/preloader/preloader";
import {
    follow,
    InitialStateType,
    setCurrentPage, setLoadItem,
    setTotalUserCount,
    setUsers,
    unfollow,
    UserPageType
} from "./usersReducer";
import React from "react";
import axios from "axios";





type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
    loadItem:boolean
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserPageType>) => void
    setCurrentPage: (pageNumber: number) => void
    setLoadItem:(loadItem:boolean)=>void
    setTotalUserCount: (totalUserCount: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
 export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setLoadItem(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true
        }).then
        (response => {
            this.props.setLoadItem(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })

    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.setLoadItem(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.currentPage}`,{
            withCredentials: true
        }).then
        (response => {
            this.props.setLoadItem(false)
            this.props.setUsers(response.data.items);
        })

    }

    render() {
       return <>
           {this.props.loadItem ? <Preloader/> : null}
       <Users follow={this.props.follow} unfollow={this.props.unfollow} pageSize={this.props.pageSize}
                      totalUserCount={this.props.totalUserCount} currentPage={this.props.currentPage}
                      usersPage={this.props.usersPage} onPageChanged={this.onPageChanged}/>
</>
    }
}
let mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        loadItem: state.usersPage.loadItem
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, {follow, unfollow,
    setUsers, setCurrentPage, setTotalUserCount, setLoadItem})(UsersContainer)