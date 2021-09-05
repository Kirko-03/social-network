import dialogReducer, {addMessageAC, updateMessageAC} from "./dialogReducer";
import profileReducer, {addPostAC, setPhoto, setStatus, setUserProfile, UserProfileType} from "./profileReducer";
import {
    follow,
    setCurrentPage,
    setLoadItem,
    setToggleFriends,
    setTotalItemsCount,
    setUsers,
    unfollow
} from "./usersReducer";
import {getCaptchaUrlSuccess, setAuthUserData} from "./authReducer";
import {setInitialSuccess, updateThemeAC} from "./appReducer";

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
    userProfile: UserProfileType | null
    isAuth: boolean,
    status: string
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
    updateMessage: (newMessage: string) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}
export type ActionTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof setInitialSuccess> |
    ReturnType<typeof updateMessageAC> |
    ReturnType<typeof addMessageAC> | ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalItemsCount> | ReturnType<typeof getCaptchaUrlSuccess>|
    ReturnType<typeof setLoadItem> | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData> | ReturnType<typeof setToggleFriends> |
    ReturnType<typeof setStatus> | ReturnType<typeof setStatus>|ReturnType<typeof setPhoto>|ReturnType<typeof updateThemeAC>


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
                {name: "Kirill", id: 1},
                {name: "Dmitriy", id: 2},
                {name: "Max", id: 3},
                {name: "Evgeniy", id: 4},
                {name: "Alexander", id: 5}
            ],
            messages: [
                {id: 1, message: "hello"},
                {id: 2, message: "Hi)"},
                {id: 3, message: "boom"}
            ],
            NewTextMessage: "kokpo"
        },
        profilePage: {
            posts: [{message: "Hi", like: 1},
                {message: "Whats up?", like: 1},
                {message: "Nice", like: 23},
                {message: "Excellent", like: 187},
            ],
            userProfile: null,
            isAuth: false,
            status: ""

        },
        friendsPage: {
            friends: [{friend: "Dmitriy"},
                {friend: "Anastasia"},
                {friend: "Maks"}
            ],

        }

    },
}
export default store







