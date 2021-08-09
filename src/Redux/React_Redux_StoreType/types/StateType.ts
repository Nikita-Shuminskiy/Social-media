
export type PostType = {
    id: number
    message: string
    likesCount: number
    img: string
}
export type ProFileHeaderType = {
    headerImg: HeaderImg
}

export type ProfileUsersType = {
    "aboutMe": null
    "contacts": {
        "facebook": null
        "website": null
        "vk": null
        "twitter": null
        "instagram": null
        "youtube": null
        "github": null
        "mainLink": null
    },
    "lookingForAJob": false
    "lookingForAJobDescription": null
    "fullName": string
    "userId": number | null
    "photos": {
        "small": string
        "large": string
    }
}

export type ProfilePageType = {
    postData: Array<PostType>
    proFileHeader: ProFileHeaderType
    newValue: string
    profileUsers: ProfileUsersType

}
export type HeaderImg = {
    img: string
    imgAvatar: string
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
