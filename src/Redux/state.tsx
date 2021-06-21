export type messegeType = {
    messege: string
    id: number
}
export type dialogType = {
    name: string
    id: number
}
export type dialogPageType = {
    dialogs: Array<dialogType>
    messege: Array<messegeType>
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
export type postType = {
    id: number
    messege: string
    img: string
    imgLogo: string
    likesCount: number

}
export type headerImg = {
    img?: string
    imgAvatar?: string
}
export type proFileHeaderType = {
    headerImg: Array<headerImg>
}
export type profilePageType = {
    postData: Array<postType>
    proFileHeader: proFileHeaderType
    newValue: string
}
export type stateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
    friendsPage: SidBarType


}
export type StoreType = {
    _state:stateType
    addPost: (message:string) => void
    addMessage:(message:string) => void
    MessageADDpost:(newMessage:string) => void
    newChangePost:(newPost:string) => void
    _change:()=>void
    subscribe:(callback:()=> void) => void
    getState: () => stateType
}

const store:StoreType = {
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
                {imgAvatar: 'https://illustrators.ru/uploads/illustration/image/1236582/main_Cat2.jpg' },
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
    addPost(message: string) {
        const postNew: postType = {
            id: new Date().getTime(),
            messege: message,
            likesCount: 0,
            img: 'https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg',
            imgLogo: 'https://cdn130.picsart.com/291236398052211.png?type=webp&to=min&r=640'
        }
        this._state.profilePage.postData.push(postNew)
        this._change()
    },
    addMessage (message: string) {
        const newPostMessage: messegeType = {
            messege: message,
            id: new Date().getTime(),
        }
        this._state.dialogPage.messege.push(newPostMessage)
        this._change()
    },
    MessageADDpost (newMessage: string) {
        this._state.dialogPage.newMessage = newMessage
        this._change()
    },
    newChangePost (newPost: string) {
        this._state.profilePage.newValue = newPost
        this._change()
    },
    _change () {},
    subscribe(callback) {
        this._change = callback // pattern observer // publisher-subscriber // addEventListener
    },
    getState () {
         return this._state
    }

}

export default store



