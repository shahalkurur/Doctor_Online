// api.js work as interceptor ,when any reqst w r gonna send  it will automatically add the correct header
// we dont need to manually write
import axios from "axios"
import { ACCESS_TOKEN } from "./constants"
 const api = axios.create({
    baseURL : import.meta.env.VITE_API_URL
 })
 api.interceptors.request.use(
   (config)=>{
      const token =localStorage.getItem(ACCESS_TOKEN); 
      if(token) {
         config.headers.Authorization = `Bearer ${token}`
      }
      return token
   },
   (error)=>{
      return Promise.reject(error)

   }
   )
   export default api
 