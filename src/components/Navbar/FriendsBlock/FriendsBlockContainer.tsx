import React from 'react';
import { connect } from 'react-redux';
import FriendsBlock from './FriendsBlock';
import { AppDispatchType, AppStateType } from '../../../Redux/redux-store';


const mapStateToProps = (state: AppStateType) => {
    return {
        friendsPage: state.sideBar
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBlock)


export default FriendsContainer;