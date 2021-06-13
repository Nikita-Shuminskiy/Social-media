export type postType = {
    id: number
    messege: string
    img: string
    imgLogo: string
    likesCount: number
}
export type messegeType = {
    messege: string
    id: number
}
export type dialogType = {
    name: string
    id: number
}
export type profilePageType = {
    postData: Array<postType>
}
export type dialogPageType = {
    dialogs: Array<dialogType>
    messege: Array<messegeType>
}
export type DataBlockSideBarType = {
    img: string
    name: string
    alt: string
}
export type SidBarType = {
    sidebar: Array<DataBlockSideBarType>
}
export type headerPageType = {
    proFileHeader:proFileHeaderType
}
export type proFileHeaderType = {
     img: string ,
     imgAvatar: string
}

export type stateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
    friendsPage: SidBarType
    headerPage:headerPageType

}
let state: stateType = {
    profilePage: {
        postData: [
            {
                id: 1,
                messege: 'helo how are you',
                likesCount: 12,
                img: 'https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg',
                imgLogo: 'https://cdn130.picsart.com/291236398052211.png?type=webp&to=min&r=640'
            },
            {
                id: 2,
                messege: 'helo World',
                likesCount: 1,
                img: 'https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg',
                imgLogo: 'https://cdn130.picsart.com/291236398052211.png?type=webp&to=min&r=640'
            }]
    },
    dialogPage: {
        dialogs: [
            {name: 'nick', id: 1,},
            {name: 'Leks', id: 2,},
            {name: 'Nastya', id: 3,},
            {name: 'Egor', id: 4,},
        ],
        messege: [
            {
                messege: 'Hello= )', id: 1,
            }, {
                messege: 'как дела', id: 2,
            }, {
                messege: '12', id: 3,
            }, {
                messege: 'what &&', id: 4,
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
    headerPage: {
        proFileHeader: {
            img: 'https://image.freepik.com/free-photo/the-color-and-beauty-of-the-sky-at-sunset_51141-13.jpg',
            imgAvatar: 'https://illustrators.ru/uploads/illustration/image/1236582/main_Cat2.jpg'
        }
    }
}

export default state
