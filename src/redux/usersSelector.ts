import {RootReduxState} from "./redux-store";

export const getUser = (state: RootReduxState) => {
    return state.usersPage
}
// export const getUserReselect=createSelector(getUser,(usersPage:Array<UserPageType>)=>{
//   return  usersPage.filter((u)=>true)
// })
export let getPageSize = (state: RootReduxState) => {
    return state.usersPage.pageSize
}
export let getTotalUserCount = (state: RootReduxState) => {
    return state.usersPage.totalUserCount
}
export let getCurrentPage = (state: RootReduxState) => {
    return state.usersPage.currentPage
}
export let getLoadItem = (state: RootReduxState) => {
    return state.usersPage.loadItem
}
export let getFollowingInProgress = (state: RootReduxState) => {
    return state.usersPage.followingInProgress
}
