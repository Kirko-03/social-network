
import {addMessageAC, updateMessageAC} from "../../redux/dialogReducer";

import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootReduxState} from "../../redux/redux-store";
import {dialogsPageType} from "../../redux/store";
import {withAuthRedirect} from "../../RedirectHOC";
import {compose} from 'redux';

type mapStateToPropsType = {
    dialogsPage: dialogsPageType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    addMessage: () => void
    newTextChangeHandler: (body: string) => void
}


let mapStateToProps = (state: RootReduxState): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        newTextChangeHandler: (body: string) => {
            dispatch(updateMessageAC(body))
        }
    }
}


export default compose(withAuthRedirect, connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, mapDispatchToProps))(Dialogs)






