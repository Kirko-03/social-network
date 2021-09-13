import axios from "axios";
import {FormDataType} from "../components/Profile/ProfileData";
const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        "API-KEY": "670e02e0-a18b-4af1-b6d8-7bc8edc695ba"
        // "API-KEY": "9796e0df-7156-4180-913f-3e6c30a4c76a"
        
    }
})
type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}

type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get<GetUsersResponseType    >(`/users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
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
    newPhoto(file: string) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    newProfile(profile: FormDataType) {
        return instance.put(`/profile`, profile)
    }
}
export const authAPI = {
    getCaptcha() {
        return instance.get(`/security/get-captcha-url`)
    },
    getAuth() {
        return instance.get(`/auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}