import React from 'react'
import s from './Dialogs.module.css'
import { sendMessage } from '../../Redux/Dialog_Reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';
import { withAuthRedirect } from '../../Hoc/WithAuthRedirect';
import { DialogPageType } from '../../Redux/React_Redux_StoreType/types/StateType';


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    dialogsPage: state.dialogs,
})

type MapStateToPropsType = {
    dialogsPage: DialogPageType

}

type MapStateDispatchToPropsType = {
    sendMessage: (value: string) => void
}

type DialogContainerType = MapStateToPropsType & MapStateDispatchToPropsType


class DialogsContainer extends React.Component<DialogContainerType> {
    componentDidMount() {

    }

    render() {
        return (<>
                <Dialogs {...this.props} dialogsPage={this.props.dialogsPage}/>
            </>
        )
    }
}


export default withAuthRedirect(connect(mapStateToProps, {sendMessage})(DialogsContainer))

