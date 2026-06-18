import axios from "axios";

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export const setAuthToken = (token: string | null): void=>{
  if(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common.Authorization
  }
}

