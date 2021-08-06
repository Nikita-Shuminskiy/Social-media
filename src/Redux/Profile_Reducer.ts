import { PostType, ProfilePageType, ProfileUsersType } from './React_Redux_StoreType/types/StateType';
import { ActionsTypes } from './Redux_Store';


export const addPost = (text: string) => ({type: 'ADD-POST', message: text} as const)

export const postValueChange = (textValue: string) => ({type: 'POST-VALUE-CHANGE', newPost: textValue} as const)

export const setProfileUser = (profile: ProfileUsersType) => ({type: 'SET-PROFILE-USER', profile} as const)


const initialState: ProfilePageType = {
    newValue: '',
    postData: [
        {
            id: 1,
            message: 'helo how are you',
            likesCount: 12,
            imgLogo: 'https://illustrators.ru/uploads/illustration/image/1236582/main_Cat2.jpg',
            img: 'https://illustrators.ru/uploads/illustration/image/1236582/main_Cat2.jpg',
        },
    ],
    proFileHeader: {
        headerImg: {
            img: 'https://image.freepik.com/free-photo/the-color-and-beauty-of-the-sky-at-sunset_51141-13.jpg',
            imgAvatar: 'https://illustrators.ru/uploads/illustration/image/1236582/main_Cat2.jpg',
        },
    },
    profileUsers: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "andL",
        userId: 18628,
        photos: {
            small: '',
            large: ''
        }
    }
}

export function Profile_Reducer(state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType {
    switch (action.type) {
        case 'ADD-POST':
            const postNew: PostType = {
                id: new Date().getTime(),
                message: action.message,
                likesCount: 0,
                img: 'https://illustrators.ru/uploads/illustration/image/1236582/main_Cat2.jpg',
                imgLogo: 'https://cdn130.picsart.com/291236398052211.png?type=webp&to=min&r=640',
            }
            return {
                ...state,
                postData: [...state.postData, postNew],
                newValue: ''
            }
        case 'POST-VALUE-CHANGE':
            return {
                ...state,
                newValue: action.newPost
            }
        case 'SET-PROFILE-USER':
            return {...state, profileUsers: action.profile}


        default:
            return state
    }
}