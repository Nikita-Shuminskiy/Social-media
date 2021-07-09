import React from 'react'
import s from './ProfileInfo.module.css'
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import { ProFileHeaderType } from '../../../../Redux/React_Redux_StoreType/types/StateType';
import { AppDispatchType, AppStateType } from '../../../../Redux/redux-store';



type ProfileInfoType = {
    proFileHeader: ProFileHeaderType
}

const mapStateToProps = (state: AppStateType) => {
    return {
        proFileHeader:state.profile.proFileHeader
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
    }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)


export default ProfileInfoContainer;
