import { addPostAC, postValueChangeAC, profileReduser } from './Profile-Reduser';
import { dialogReduser, messageValueAC, sendMessageAC } from './Dialog-Reduser';

export type MessegeType = {
    messege: string
    id: number
}
export type DialogType = {
    name: string
    id: number
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messege: Array<MessegeType>
    newMessage: string
}
export type DataBlockSideBarType = {
    img: string
    name: string
    alt: string
}
export type SidBarType = {
    sidebar: Array<DataBlockSideBarType>
}
export type PostType = {
    id: number
    messege: string
    img: string
    imgLogo: string
    likesCount: number

}
export type HeaderImg = {
    img?: string
    imgAvatar?: string
}
export type ProFileHeaderType = {
    headerImg: Array<HeaderImg>
}
export type ProfilePageType = {
    postData: Array<PostType>
    proFileHeader: ProFileHeaderType
    newValue: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    friendsPage: SidBarType
}
export type StoreType = {
    _state: StateType
   /* _change: () => void*/
    // _subscribe: (observer: () => void) => void
    _subscribe: any
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof messageValueAC>
    | ReturnType<typeof postValueChangeAC>

const store: StoreType = {
    _state: {
        profilePage: {
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
        },
        dialogPage: {
            dialogs: [
                {name: 'nick', id: 1,},
                {name: 'Leks', id: 2,},
                {name: 'Nastya', id: 3,},
                {name: 'Egor', id: 4,},
            ],
            newMessage: '',
            messege: [
                {
                    messege: 'как дела', id: 1,
                }, {
                    messege: 'как дела', id: 2,
                }, {
                    messege: 'как дела', id: 3,
                }, {
                    messege: 'как дела', id: 4,
                }
            ],
        },
        friendsPage: {
            sidebar: [
                {img: 'https://mir-avatarok.3dn.ru/_si/0/92302704.jpg', name: 'Nastya', alt: 'qwq'},
                {img: 'https://mir-avatarok.3dn.ru/_si/0/92302704.jpg', name: 'Vivaldi', alt: 'qwzxq'},
                {img: 'https://mir-avatarok.3dn.ru/_si/0/92302704.jpg', name: 'Nana', alt: 'qwe'},
            ]
        },
    },
  /*  _change() {
        console.log('subscriber call')
    },*/
    _subscribe(observer: any) {
        this._subscribe = observer // pattern observer // publisher-subscriber // addEventListener
    },
    getState() {
        return this._state
    },
    dispatch(action) { // type: 'ADD POST'
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogPage = dialogReduser(this._state.dialogPage, action)

        debugger
        this._subscribe(this._state)
    }
}
/*
export const subscribe = (observer:any) => {
    renderEntireTree = observer
}
*/


export default store



