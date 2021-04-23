import dialogReducer, {addMessageAC, updateMessageAC} from "./dialogReducer";
import profileReducer, {
    addPostAC,
    setStatus,
    getUserProfile,
    setUserProfile,
    updateAddPostAC,
    UserProfileType,
} from "./profileReducer";
import {
    follow,
    setCurrentPage,
    setLoadItem,
    setToggleFriends,
    setTotalUserCount,
    setUsers,
    unfollow
} from "./usersReducer";
import {setAuthUserData} from "../components/Header/authReducer";

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    friendsPage: friendsPageType
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    NewTextMessage: string
}

export type profilePageType = {
    posts: Array<PostType>
    NewTextPost: string
    userProfile: UserProfileType | null
    isAuth:boolean,
    status:string
}
export type friendsPageType = {
    friends: Array<friendsType>
}
export type dialogsType = {
    name: string
    id: number
}
export type messagesType = {
    message: string
    id: number
}
export type PostType = {
    message: string
    like: number

}
export type MessageType = {

    message: string
}
export type StoreType = {
    _state: RootStateType
    addPost: (postText: string) => void
    addMessage: (messageText: string) => void
    subscribe: (observer: () => void) => void
    _onChange: () => void
    updateAddPost: (t: string) => void
    updateMessage: (newMessage: string) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}
export type ActionTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateAddPostAC> |
    ReturnType<typeof updateMessageAC> |
    ReturnType<typeof addMessageAC> | ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUserCount> |
    ReturnType<typeof setLoadItem> | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData> | ReturnType<typeof setToggleFriends>|
    ReturnType<typeof setStatus>|ReturnType<typeof setStatus>


export type friendsType = {
    friend: string
}
export let store: StoreType = {
    _onChange() {
        console.log("sdf")
    },
    getState() {
        return this._state;
    },
    addPost(postText: string) {
        const newPost: PostType = {
            message: postText,
            like: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._onChange()
    },
    updateAddPost(newText: string) {
        this._state.profilePage.NewTextPost = newText
        this._onChange()
    },
    updateMessage(newMessage: string) {
        this._state.dialogsPage.NewTextMessage = newMessage
        this._onChange()
    },
    addMessage() {
        this._state.dialogsPage.messages.push();
        this._onChange()
    },
    subscribe(observer) {
        this._onChange = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._onChange()
    },
    _state: {
        dialogsPage: {
            dialogs: [
                {name: "Kirik", id: 1},
                {name: "Dimik", id: 2},
                {name: "max", id: 3},
                {name: "dima", id: 4},
                {name: "sasha", id: 5}
            ],
            messages: [
                {id: 1, message: "hello"},
                {id: 2, message: "Как дела придурок?)"},
                {id: 3, message: "Игноришь?"}
            ],
            NewTextMessage: "kokpo"
        },
        profilePage: {
            posts: [{message: "Hi", like: 1},
                {message: "Whats up?", like: 1},
                {message: "Learn Pituhon(((", like: -13},
                {message: "LOSEEER", like: 187},
                {message: "Соси пинчер", like: 100}],
            NewTextPost: "it-camasutra",
            userProfile: null,
            isAuth:false,
            status:""

        },
        friendsPage: {
            friends: [{friend: "Dimas"},
                {friend: "Nastyuha"},
                {friend: "Maks"}
            ],

        }

    },
}


export default store

