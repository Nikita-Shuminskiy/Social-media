import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '978dde1d-b974-4ee1-a942-d32857675e96'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export type UpdatePhotoType = {
    resultCode: number
    messages: Array<string>,
    data: {
        small: string
        large: string
    }
}
export type ProfileUserDataType = {
    aboutMe: string,
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
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
}


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => {
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
        return  instance.get( 'profile/' + userId)
    }
}
export const profileAPI = {
    getProfile(userId:number) {
        console.warn('Obsolete method.Please profileAPI object')
        return  usersAPI.userIdAPI(userId)
    },
    updPhoto(image:string) {
        const formData = new FormData()
        formData.append('image',image)

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    getStatus(userId:number){
        return instance.get( 'profile/status/' + userId)
    },
    updateStatus(status:string){
        return instance.put( 'profile/status', status)
    },
    updateProfileData(profile:ProfileUserDataType){
        return instance.put( 'profile', profile)
    }
}
export const authMeAPI= {
    Me() {
        return instance.get(`auth/me`,)
    },
    login(email:string,password:number,rememberMe:boolean,captcha:string | null){
        return instance.post('auth/login', {email,password,rememberMe,captcha})
    },
    logout(){
        return instance.delete('auth/login')
    },
    captcha(){
        return instance.get<{url:string}>('security/get-captcha-url')
    }
}


