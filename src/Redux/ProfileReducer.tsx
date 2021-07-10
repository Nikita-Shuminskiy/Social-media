import { ActionsTypes} from "./redux-store"
import { PostType, ProfilePageType } from './React_Redux_StoreType/types/StateType';


export const addPostAC = (text: string) => ({type: 'ADD-POST', message: text} as const)
export const postValueChangeAC = (textValue: string) => ({type: 'POST-VALUE-CHANGE', newPost: textValue} as const)



const initialState:ProfilePageType ={
    newValue: '',
    postData: [
    {
        id: 1,
        messege: 'helo how are you',
        likesCount: 12,
        img: 'https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg',
        imgLogo: 'https://cdn130.picsart.com/291236398052211.png?type=webp&to=min&r=640'
    },
],
    proFileHeader: {
    headerImg: [
        {img: 'https://image.freepik.com/free-photo/the-color-and-beauty-of-the-sky-at-sunset_51141-13.jpg'},
        {imgAvatar: 'https://illustrators.ru/uploads/illustration/image/1236582/main_Cat2.jpg'},
    ]
}
}

export function profileReducer(state:ProfilePageType = initialState, action: ActionsTypes): ProfilePageType {
    switch (action.type) {
        case 'ADD-POST':
            const postNew: PostType = {
                id: new Date().getTime(),
                messege: action.message,
                likesCount: 0,
                img: 'https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg',
                imgLogo: 'https://cdn130.picsart.com/291236398052211.png?type=webp&to=min&r=640'
            }
            return  {
                ...state,
                postData: [...state.postData, postNew],
                newValue: ''
            }
        case 'POST-VALUE-CHANGE':
            return {
                ...state,
                newValue: action.newPost
            }
        default:
            return state
    }
}