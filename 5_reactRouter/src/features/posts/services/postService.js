import axios from 'axios'

//Estou utilizando uma API pública para exemplificação que permite apenas o método GET
import { BASE_URL } from "../../../config/axios"

const api = axios.create({
    baseURL: BASE_URL,
})

const postService = {
    getAll: async (filters = {}) => {
        let data, status

        try {
            var response = await api.get('/posts', {
                params: filters
            })
            data = response.data
            status = response.status

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
            status = response.status
            data = response.data
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
        let data, status

        try {
            const response = await api.post('/posts', post)
            status = response.status
            data = response.data
        } catch (error) {
            data = "Não foi possível criar o post, tente novamente!"
            status = error.response.status
        }
        finally {
            return { data, status: status }
        }
    },

    update: async (post, id) => {
        let data, status

        try {
            const response = await api.put(`posts/${id}`, post)
            status = response.status
            data = response.data
        } catch (error) {
            data = "Não foi possível atualizar o post, tente novamente!"
            status = error.response.status
        }
        finally {
            return { data, status: status }
        }
    },

    //nesse método seria implementado o método DELETE do HTTP em uma API que permita este método
    delete: async (id) => {

    }
}

export default postService