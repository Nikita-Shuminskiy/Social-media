import React  from 'react'
import s from './Dialogs.module.css'
import { messageValue, sendMessage } from '../../Redux/Dialog_Reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';
import { withAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { DialogPageType } from '../../Redux/React_Redux_StoreType/types/StateType';


const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
        dialogsPage: state.dialogs,
        newValue: state.dialogs.newMessage,
})

type MapStateToPropsType = {
    dialogsPage: DialogPageType
    newValue: string

}

type MapStateDispatchToPropsType = {
    messageValue: (body: string) => void
    sendMessage: (text:string) => void
}

type DialogContainerType = MapStateToPropsType & MapStateDispatchToPropsType

export type State = {}

class DialogsContainer extends React.Component<DialogContainerType, State> {
    componentDidMount() {

    }
    render() {
        return (<>
                <Dialogs {...this.props} dialogsPage={this.props.dialogsPage} newValue={this.props.newValue} />
            </>
        )
    }
}


export default withAuthRedirect (connect(mapStateToProps, {messageValue, sendMessage})(DialogsContainer) )

