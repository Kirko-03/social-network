import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0`,
    headers: {
        "API-KEY": "b38adab4-ca13-4452-a976-08addc7350f8"

    }})


export const usersAPI = {
    getUsers(currentPage=2, pageSize= 5){
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then
    (response => {
        if(response.data)
        return response.data
    });
},
 deleteUser (id:number){
   return  instance.delete(`/follow/${id}`)
},
postUser(id:number)  {
  return   instance.post(`/follow/${id}`,{})
},
getProfile(id: number){
        console.warn('Устаревший метод')
    return profileAPI.getProfile(id)
}

}
export const profileAPI={
    getProfile(id:number){
        return instance.get(`/profile/`+id)
    },
    getStatus(id:number){
        return instance.get(`/profile/status/`+id)
    },
    updateStatus(status:string){
        return instance.put(`/profile/status`,{status:status})
    }
}
export const authAPI= {
    getAuth() {
        return instance.get(`/auth/me`)
    },
    login(email:string,password:string,rememberMe:boolean){
        return instance.post(`/auth/login`,{email,password,rememberMe})
    },
    logout(){
        return instance.delete(`/auth/login`)
    }
}