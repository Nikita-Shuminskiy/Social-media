import { PhotosProfileType, profileAPI, ProfileType, usersAPI } from '../Api/Api';
import { ActionsTypes, BaseThunkType, InferActionsTypes } from './Redux_Store';
import { v1 } from 'uuid';
import { Dispatch } from 'redux';
import { FormAction } from 'redux-form';
import { PostType } from './React_Redux_StoreType/types/StateType';


const initialState = {
    postData: [
        {
            id: '1',
            message: 'hello how are you',
            likesCount: 12,
            img: '',
        },
    ] as PostType[],
    profileUsers: null as unknown as ProfileType,
    status: '',
}
export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<ActionsTypes>
type ThunkType = BaseThunkType<ActionsType | FormAction>


export function ProfileReducer(state = initialState, action: ActionsTypes): InitialStateType {
    switch (action.type) {
        case 'PROFILE/ADD-POST':
            const postNew = {
                id: v1(),
                message: action.newMessage,
                likesCount: 0,
                img: state.profileUsers?.photos?.small
            }
            return {...state, postData: [postNew,...state.postData]}

        case 'PROFILE/SET-PROFILE-USER':
            return {...state, profileUsers: action.profile}

        case 'PROFILE/SET-PROFILE-STATUS':
            return {...state, status: action.status}

        case 'PROFILE/DEL-POST-PROFILE':
            return {...state, postData: state.postData.filter((f) => f.id !== action.id)}

        case 'PROFILE/UPDATE-PHOTO-USER':
            return {...state, profileUsers: {...state.profileUsers, photos: action.photos} as ProfileType}
        default:
            return state
    }
}

export const addPost = (newMessage: string) => ({type: 'PROFILE/ADD-POST', newMessage} as const)

export const setProfileUser = (profile: ProfileType) => ({type: 'PROFILE/SET-PROFILE-USER', profile} as const)

export const setProfileStatus = (status: string) => ({type: 'PROFILE/SET-PROFILE-STATUS', status} as const)

export const deletePost = (id: string) => ({type: 'PROFILE/DEL-POST-PROFILE', id} as const)

export const updatePhoto = (photos: PhotosProfileType) => ({type: 'PROFILE/UPDATE-PHOTO-USER', photos} as const)


export const getUserProfileThunk = (userId: number): ThunkType => async (dispatch) => {
    const data = await usersAPI.userIdAPI(userId)
    dispatch(setProfileUser(data))
}
export const updProfileDataThunk = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().authMe.id
    const data = await profileAPI.updateProfileData(profile)
    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfileThunk(userId))
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        alert('error upd user')
    }
}
export const getStatusThunk = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                    dispatch(setProfileStatus(response.data))
            }).catch( () => {
                alert('err status')
        })
    }
}
export const updateStatusThunk = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}
export const updatePhotoThunk = (photo:string) => async (dispatch:Dispatch) => {
   let res = await profileAPI.updPhoto(photo)
            if (res.data.resultCode === 0) {
                dispatch(updatePhoto(res.data.data.photos))
            } else{
                alert(res.data.messages)
            }
}