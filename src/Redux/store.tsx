import { addPostAC, postValueChangeAC, ProfileReducer } from './ProfileReducer';
import { DialogReducer, messageValueAC, sendMessageAC } from './DialogReducer';
import { SideBarReducer } from './SideBar-Reduser';
/*

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

export type FriendsPageType = {
    img: string
    name: string
    alt: string
    id:number
}

export type SidBarType = {
    friendsPage: FriendsPageType[]
}

export type PostType = {
    id: number
    messege: string
    img: string
    imgLogo: string
    likesCount: number

}

export type ProFileHeaderType = {
    headerImg: Array<HeaderImg>
}

export type ProfilePageType = {
    postData: Array<PostType>
    proFileHeader: ProFileHeaderType
    newValue: string
}

export type HeaderImg = {
    img?: string
    imgAvatar?: string
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof messageValueAC>
    | ReturnType<typeof postValueChangeAC>

export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sideBar: SidBarType
}

export type StoreType = {
    _state: StateType
    subscribe: any
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export const store: StoreType = {
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
        sideBar: {
            friendsPage: [
                {img: 'https://mir-avatarok.3dn.ru/_si/0/92302704.jpg', name: 'Nastya', alt: 'qwq' , id:1},
                {img: 'https://mir-avatarok.3dn.ru/_si/0/92302704.jpg', name: 'Vivaldi', alt: 'qwzxq' , id:2},
                {img: 'https://mir-avatarok.3dn.ru/_si/0/92302704.jpg', name: 'Nana', alt: 'qwe' , id:3},
            ]
        },
    },

    subscribe(observer: any) {
        this.subscribe = observer
    },
    getState(): StateType {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar)

        this.subscribe(this._state)
    }
}

*/


