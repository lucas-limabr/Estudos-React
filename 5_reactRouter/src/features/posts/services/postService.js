import axios from 'axios'

//Estou utilizando uma API pública para exemplificação que permite apenas o método GET
import { BASE_URL } from "../../../config/axios"

const api = axios.create({
    baseURL: BASE_URL,
})

const postService = {

    getAll: async () => {
        let data, status
        
        try {
            var response = await api.get('/posts')
            const postsData = response.data
            status = response.status
            data = postsData

        } catch (error) {
            data = "Não foi possível buscar os posts, tente novamente!"
            status = error.response.status
        }
        finally {
            return { data, status: status }
        }
    },

    getById: async (id) => {
        let data, status

        try {
            var response = await api.get(`/posts/${id}`)
            const postData = response.data

            status = response.status
            data = postData
        } catch (error) {
            data = "Não foi possível buscar os post, tente novamente!"
            status = error.response.status
        }
        finally {
            return { data, status: status }
        }
    },

    //nesse método seria implementado o método POST do HTTP em uma API que permita este método
    create: async (post) => {
    },

    //nesse método seria implementado o método DELETE do HTTP em uma API que permita este método
    delete: async (id) => {

    }
}

export default postService