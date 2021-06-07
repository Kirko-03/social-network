import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        "API-KEY": "5c7c5d33-9f6e-4302-af36-ca7c7fcece08"

    }
})


export const usersAPI = {
    async getUsers(currentPage = 2, pageSize = 5) {
        let response = await instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            if (response.data)
                return response.data
    },
    deleteUser(id: number) {
        return instance.delete(`/follow/${id}`)
    },
    postUser(id: number) {
        return instance.post(`/follow/${id}`, {})
    },
    getProfile(id: number) {
        console.warn('Устаревший метод')
        return profileAPI.getProfile(id)
    }

}
export const profileAPI = {
    getProfile(id: number) {
        return instance.get(`/profile/` + id)
    },
    getStatus(id: number) {
        return instance.get(`/profile/status/` + id)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status: status})
    },
    newPhoto(file:string){
const formData=new FormData()
        formData.append('image',file)
        return instance.put(`/profile/photo`,formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    }
}
export const authAPI = {
    getAuth() {
        return instance.get(`/auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}