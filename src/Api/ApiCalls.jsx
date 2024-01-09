import instance from './Authentication.jsx';
import axios from 'axios';
import { API_USER_URL} from '../Config.js'

export const signup=body=>{
   axios.post(`${API_USER_URL}/api/auth/signup`, body)
}
export const logout=body=>{
   instance.post(`${ API_USER_URL}/api/v1/auth/logout`)
}
export const login =creds =>{
    return axios.post(`${API_USER_URL}/api/v1/auth/login`,creds)
}
 
   