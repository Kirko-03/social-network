import {ActionTypes, dialogsPageType} from "./store";
const UPDATEMESSAGE = "UPDATE-MESSAGE";
const ADDMESSAGE = "ADDMESSAGE"

let initialState =  {dialogs: [
    {name: "Kirik", id: 1},
    {name: "Dimik", id: 2},
    {name: "max", id: 3},
    {name: "dima", id: 4},
    {name: "sasha", id: 5}
],
    messages: [
        {id:1,message: "hello"},
        {id:2,message: "Как дела придурок?)"},
        {id:3,message: "Игноришь?"}
    ],
    NewTextMessage:""}

const dialogReducer = (state:dialogsPageType=initialState,action:ActionTypes) => {
switch(action.type){
    case UPDATEMESSAGE: {
        let copyStore = {...state, NewTextMessage: action.body}
        copyStore.NewTextMessage = action.body

        return copyStore
    }
    case ADDMESSAGE: {
        let body = state.NewTextMessage
        return {
            ...state,
            messages: [...state.messages, {id: 6, message: body}],
            NewTextMessage: ""
        }
    }
    default:
        return state
    }

}

export const updateMessageAC = (body:string) =>{
    return {
        type: UPDATEMESSAGE,
        body:body
    }as const
}
export const addMessageAC = () =>{
    return {
        type: ADDMESSAGE,

    }as const
}
export default dialogReducer