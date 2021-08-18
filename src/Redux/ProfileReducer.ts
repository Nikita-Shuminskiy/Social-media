import { profileAPI, usersAPI } from '../Api/Api';
import { PostType, ProfilePageType, ProfileUsersType } from './React_Redux_StoreType/types/StateType';
import { ActionsTypes, AppDispatchType } from './Redux_Store';
import { v1 } from 'uuid';


export const addPost = (newMessage: string) => ({type: 'ADD-POST', newMessage} as const)

export const setProfileUser = (profile: ProfileUsersType) => ({type: 'SET-PROFILE-USER', profile} as const)

export const setProfileStatus = (status: string) => ({type: 'SET-PROFILE-STATUS', status} as const)

export const getUserProfileThunk = (userId: number) => {
    return (dispatch: AppDispatchType) => {
        usersAPI.userIdAPI(userId)
            .then(response => {
            dispatch(setProfileUser(response.data))
        })
    }
}
export const getStatusThunk = (userId: number) => {
    return (dispatch: AppDispatchType) => {
        profileAPI.getStatus(userId)
            .then(response => {
            dispatch(setProfileStatus(response.data))
        })
    }
}

export const updateStatusThunk = (status:string) => {
    return (dispatch: AppDispatchType) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setProfileStatus(status))
                }
            })
    }
}


const initialState: ProfilePageType = {
    postData: [
        {
            id: '1',
            message: 'helo how are you',
            likesCount: 12,
            img: 'https://cdn5.vectorstock.com/i/1000x1000/65/59/hacker-with-computer-avatar-character-vector-14776559.jpg',
        },
    ],
    proFileHeader: {
        headerImg: {
            img: 'https://image.freepik.com/free-photo/the-color-and-beauty-of-the-sky-at-sunset_51141-13.jpg',
        },
    },
    profileUsers: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: null,
        photos: {
            small: '',
            large: ''
        }
    },
    status:'',
}


export function ProfileReducer(state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType {
    switch (action.type) {
        case 'ADD-POST':
            const postNew: PostType = {
                id: v1(),
                message: action.newMessage,
                likesCount: 0,
                img: 'https://cdn5.vectorstock.com/i/1000x1000/65/59/hacker-with-computer-avatar-character-vector-14776559.jpg',
            }
            return {
                ...state,
                postData: [...state.postData, postNew],
            }
        case 'SET-PROFILE-USER':
            return {...state, profileUsers: action.profile}
        case 'SET-PROFILE-STATUS':
            return {...state, status: action.status}


        default:
            return state
    }
}