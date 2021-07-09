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
export type MessegeType = {
    message: string
    id: number
}
export type DialogType = {
    name: string
    id: number
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    message: Array<MessegeType>
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