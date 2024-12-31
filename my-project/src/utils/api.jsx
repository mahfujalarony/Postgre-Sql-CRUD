import axios from 'axios'

const API = axios.create({
    baseURL: "https://postgre-sql-crud-gw7a.vercel.app/api"
})

export default API;