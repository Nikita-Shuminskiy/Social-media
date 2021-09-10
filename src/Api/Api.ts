import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '978dde1d-b974-4ee1-a942-d32857675e96'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUserType>(`users?page=${currentPage}&count=${pageSize}`).then(res => {
            return res.data
        })
    },
    followApi(id: number) {
        return instance.post(`follow/${id}`,)

    },
    unFollowApi(id: number) {
        return instance.delete(`follow/${id}`)
    },
    userIdAPI(userId:number) {
        return  instance.get<GetProfileUserType>( 'profile/' + userId)
    }
}
export const profileAPI = {
    /*getProfile(userId:number) {
        console.warn('Obsolete method.Please profileAPI object')
        return  usersAPI.userIdAPI(userId)
    },*/
    updPhoto(image:string) {
        const formData = new FormData()
        formData.append('image',image)
        return instance.put<GeneralType<PhotosProfileType>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    getStatus(userId:number){
        return instance.get( 'profile/status/' + userId)
    },
    updateStatus(status:string){
        return instance.put<GeneralType>( 'profile/status', {status})
    },
    updateProfileData(profile:GetProfileUserType){
        return instance.put<GeneralType<GetProfileUserType>>( 'profile', profile)
    }
}
export const authMeAPI= {
    Me() {
        return instance.get<GeneralType<MeType>>(`auth/me`)
    },
    login( data:LoginUserDataType){
        return instance.post<GeneralType<{userId:number}>>('auth/login', data)
    },
    logout(){
        return instance.delete<GeneralType>('auth/login')
    },
    captcha(){
        return instance.get<{url:string}>('security/get-captcha-url')
    }
}


export type LoginUserDataType = {
    email:string
    password: null | number
    rememberMe:boolean
    captcha:string | null
}

export type ProfileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type GetProfileUserType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    fullName: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
}
export type PhotosProfileType = {
    small: string
    large: string
}

export  type ApiUserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotosProfileType
    status: null | string
    followed: boolean
}

type GetUserType = {
    items: Array<ApiUserType>
    totalCount: number
    error: string
}
type MeType = {
    id: number
    login: string
    email: string
}
type GeneralType<D = {}> = {
    data: D
    messages: Array<string>
    fieldsErrors?: Array<string>
    resultCode: number
}
