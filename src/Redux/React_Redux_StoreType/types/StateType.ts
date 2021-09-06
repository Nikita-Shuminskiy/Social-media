import { GetProfileUserType } from '../../../Api/Api';

export type PostType = {
    id: string
    message: string
    likesCount: number
    img: string
}

export type ProfilePageType = {
    postData: Array<PostType>
    profileUsers: GetProfileUserType
    status:string
}
export type MessageType = {
    message: string
    id: string
}
export type DialogType = {
    name: string
    id: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    message: Array<MessageType>
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
