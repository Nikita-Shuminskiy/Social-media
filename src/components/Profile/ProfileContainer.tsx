import React from 'react';
import s from './Profile.module.css'
import { ActionsTypes, StoreType } from '../../Redux/store';
import Profile from './Profile';




type ProfileType = {
   /* profilePage: ProfilePageType*/
    /*addPost: (message:string) => void
    newChangePost:(newPost:string) => void*/
    /*newValue: string
    dispatch:(action:ActionsTypes) => void*/
    store:StoreType
}

export const ProfileContainer = (props:ProfileType) => {
    return (
        <div>
          <Profile store={props.store}/>
        </div>
    )
}

