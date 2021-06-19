import {RootReduxState} from "./redux-store";

export let getUser = (state: RootReduxState) => {
    return state.usersPage
}

export let getPageSize = (state: RootReduxState) => {
    return state.usersPage.pageSize
}
export let getTotalItemsCount = (state: RootReduxState) => {
    return state.usersPage.totalItemsCount
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
