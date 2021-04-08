import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'

import {dialogsPageType} from "../../redux/store";


type DialogsPropsType = {
    dialogsPage:dialogsPageType
    addMessage: () => void
    newTextChangeHandler: (body: string) => void
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogPage = props.dialogsPage
    let NewTextMessage = dialogPage.NewTextMessage
    let addMessage = () => {
        props.addMessage()

    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.newTextChangeHandler(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            </div>
            <div className={s.message}>
                <textarea placeholder={"Введите что-нибудь"} value={NewTextMessage}
                          onChange={newTextChangeHandler}></textarea>
                <button onClick={addMessage}>new post</button>
            </div>
        </div>
    )
}


export default Dialogs;
