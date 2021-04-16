import React from 'react'
import {addMessageAC, updateMessageAC} from "../../redux/dialogReducer";

import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {dialogsPageType} from "../../redux/store";


// const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store=>{
//                     let addMessage = () => {
//                         store.dispatch(addMessageAC())
//                     }
//                     const newTextChangeHandler = (body:string) =>{
//                         store.dispatch(updateMessageAC(body))
//                     }
//                    return( <Dialogs addMessage={addMessage} newTextChangeHandler={newTextChangeHandler} store={store} />)
//             }}
//         </StoreContext.Consumer>
//                 )
//
// }

type mapStateToPropsType = {
    dialogsPage:dialogsPageType
    auth:boolean
}
type mapDispatchToPropsType = {
    addMessage: () => void
    newTextChangeHandler:(body:string) => void
}


let mapStateToProps = (state:RootReduxState):mapStateToPropsType=>{
    return{
    dialogsPage: state.dialogPage,
        auth:state.auth.isAuth
}
    }

    let mapDispatchToProps = (dispatch:any):mapDispatchToPropsType => {
        return {
            addMessage: () => {
                dispatch(addMessageAC())
            },
            newTextChangeHandler:(body:string) =>{
               dispatch(updateMessageAC(body))
                }
        }
    }



    const DialogsContainer = connect<mapStateToPropsType,mapDispatchToPropsType,{},RootReduxState>(mapStateToProps,mapDispatchToProps)(Dialogs)

    export default DialogsContainer;
