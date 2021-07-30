import React from 'react'
import s from './Dialogs.module.css'
import { messageValue, sendMessage } from '../../Redux/DialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { AppDispatchType, AppStateType } from '../../Redux/redux-store';


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogs,
        newValue: state.dialogs.newMessage
    }
}

/*const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        changeMessageAdd: (textMessage: string) => dispatch(messageValue(textMessage)),
        addMessage: (text:string) => {dispatch(sendMessage(text))}
    }
}*/

export default connect(mapStateToProps, { messageValue, sendMessage})(Dialogs)
