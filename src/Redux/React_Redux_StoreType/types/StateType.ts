
export type PostType = {
    id: string
    message: string
    likesCount: number
    img: string
}
export type ProFileHeaderType = {
    headerImg: HeaderImg
}

export type ProfileUsersType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: false
    lookingForAJobDescription: string
    fullName: string
    userId: number | null
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    postData: Array<PostType>
    proFileHeader: ProFileHeaderType
    profileUsers: ProfileUsersType
    status:string

}
export type HeaderImg = {
    img: string
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
