import axios from 'axios';



const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '4b7b5ab4-7bcb-48d4-a324-27c29621ab2c'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
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
    getStatus(userId:number){
        return instance.get( 'profile/status/' + userId)
    },
    updateStatus(status:string){
        return instance.put( 'profile/status/', {status:status})
    }
}
export const authMeAPI= {
    Me() {
        return instance.get(`auth/me`,)
    }
}

