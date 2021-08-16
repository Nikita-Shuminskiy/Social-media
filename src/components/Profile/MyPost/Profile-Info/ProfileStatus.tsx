import React, { ChangeEvent } from 'react';

export type ProfileStatusType = {
    status: string
    updateStatusThunk: (status: string) => void
}

export type StateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType, StateType> {

    state: StateType = {
        editMode: false,
        status: this.props.status,
    }

    activateEditModeSpan = () => {
        this.state.status = ''
        this.setState({
            editMode: true
        })

    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        if (this.state.status !== '') {
            this.props.updateStatusThunk(this.state.status)
        }
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<StateType>, snapshot?: any) {
        debugger
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {
                !this.state.editMode  ?
                    <div>
                        <span onDoubleClick={this.activateEditModeSpan}>{this.props.status || 'No Status'}</span>

                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
            }
        </div>
    }

};
