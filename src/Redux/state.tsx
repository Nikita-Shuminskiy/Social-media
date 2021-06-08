
export type postType = {
    id:number
    messege:string
    img:string
    imgLogo:string
    likesCount:number
}
export type messegeType = {
    messege:string
    id:number
}
export type dialogType = {
    name:string
    id:number
}
export type profilePageType = {
    postData: Array<postType>
}
export type dialogPageType = {
    dialogs: Array<dialogType>
    messege: Array<messegeType>
}
export type stateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
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
               messege: 'Hello= )', id:1,
           }, {
               messege: 'как дела',id:2,
           }, {
               messege: '12',id:3,
           }, {
               messege: '12113',id:4,
           }, {
               messege: '12113',id:5,
           }, {
               messege: '12113',id:6,
           },
       ],
   }
}

export default state


export class setStateType {
}