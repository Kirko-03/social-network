import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "28d35b65-1c27-49fe-a252-37715ef9a2a4"
    }})


export const usersAPI = {
    getUsers(currentPage=2, pageSize= 5){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then
    (response => {
        if(response.data)
        return response.data
    });
}}
export const deleteUser = (id:number) => {
   return  instance.delete(`follow/${id}`).then
    (response => {
        return response.data;
    });
}
export const postUser = (id:number) => {
  return   instance.post(`follow/${id}`,{}).then
    (response => {
        return response.data;
    });
}
