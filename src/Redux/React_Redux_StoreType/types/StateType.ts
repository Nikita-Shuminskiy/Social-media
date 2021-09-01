
export type PostType = {
    id: string
    message: string
    likesCount: number
    img: string
}


/*export type ContactUserType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string

}*/

export type ProfileUsersType = {
    aboutMe: string,
    contacts: {
        "facebook": string
        'website': string
        'vk': string
        'twitter': string
        'instagram': string
        'youtube': string
        'github': string
        'mainLink': string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    postData: Array<PostType>
    profileUsers: ProfileUsersType
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
