import React, { ChangeEvent } from 'react';

export type ProfileStatusType = {
    status: string
    updateStatusThunk: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditModeSpan = () => {
        this.state.status = ''
        this.setState({
            editMode: true
        })

    }
    closedInputText = () => {
        this.setState({
            editMode: false
        })
        if(this.state.status !== ''){
            this.props.updateStatusThunk(this.state.status.trim())
        }
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return <div>
            {
                this.state.editMode === false ?
                    <div>
                        <span onDoubleClick={this.activateEditModeSpan}>{this.props.status}</span>

                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus onBlur={this.closedInputText}
                               value={this.state.status}/>
                    </div>
            }
        </div>
    }

};
