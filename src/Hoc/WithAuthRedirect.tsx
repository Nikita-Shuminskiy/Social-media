import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../Redux/Redux_Store';

type MapStatePropsType = {
    isAuth:boolean
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => (
    {
        isAuth: state.authMe.isAuth
    }
)


export function withAuthRedirect<T>(Component: ComponentType<T>)  {

    const RedirectComponent = (props: MapStatePropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to="/login"/>


        return <Component {...restProps as T} />
    }
    return connect(mapStateToProps)(RedirectComponent)
}

