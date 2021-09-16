import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'

import {dialogsPageType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import { Button } from '@material-ui/core';


type DialogsPropsType = {
    dialogsPage: dialogsPageType
    addMessage: () => void
    newTextChangeHandler: (body: string) => void
    isAuth: boolean
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


    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogPage.dialogs.map(d => <div>{d.name}</div>)}
            </div>
            <div className={s.message}>
                <textarea placeholder={"Введите что-нибудь"} value={NewTextMessage}
                          onChange={newTextChangeHandler}/>
                <Button color={'primary'} style={{background:'white'}} onClick={addMessage}>new post</Button>
                <div >
                    {
                        dialogPage.messages.map(m => <li>{m.message}</li>)
                    }
                </div>
            </div>
        </div>
    )
}


export default Dialogs;
