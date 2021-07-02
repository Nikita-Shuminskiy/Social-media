import { ActionsTypes, PostType, ProfilePageType } from './store';


export const postValueChangeAC = (textValue: string) => ({type: 'POST-VALUE-CHANGE', newPost: textValue} as const)
export const addPostAC = (text: string) => ({type: 'ADD-POST', message: text} as const) // () - значит что мы вернули обьект return

export function profileReduser(profilePage: ProfilePageType, action: ActionsTypes): ProfilePageType {
    switch (action.type) {
        case 'ADD-POST':
            const postNew: PostType = {
                id: new Date().getTime(),
                messege: action.message,
                likesCount: 0,
                img: 'https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg',
                imgLogo: 'https://cdn130.picsart.com/291236398052211.png?type=webp&to=min&r=640'
            }
            profilePage.postData.push(postNew)
            profilePage.newValue = ''
            return profilePage
        case 'POST-VALUE-CHANGE':
            debugger
            profilePage.newValue = action.newPost
            return profilePage
        default:
            return profilePage
    }
}