import axios from 'axios'

//Estou utilizando uma API pública para exemplificação que permite apenas o método GET
import { BASE_URL } from "../../../config/axios"

const api = axios.create({
    baseURL: BASE_URL,
})

const postService = {
    getAll: async (filters = {}) => {
        let data, statusCode

        try {
            var response = await api.get('/posts', {
                params: filters
            })
            data = response.data
            statusCode = response.status

        } catch (error) {
            data = "Não foi possível buscar os posts, tente novamente!"
            statusCode = error.response.status
        }
        finally {
            return { data, statusCode }
        }
    },

    getById: async (id) => {
        let data, statusCode

        try {
            var response = await api.get(`/posts/${id}`)
            statusCode = response.status
            data = response.data
        } catch (error) {
            data = "Não foi possível buscar os post, tente novamente!"
            statusCode = error.response.status
        }
        finally {
            return { data, statusCode }
        }
    },

    create: async (post) => {
        let data, statusCode

        try {
            const response = await api.post('/posts', post)
            statusCode = response.status
            data = response.data
        } catch (error) {
            data = "Não foi possível criar o post, tente novamente!"
            statusCode = error.response.status
        }
        finally {
            return { data, statusCode }
        }
    },

    update: async (post, id) => {
        let data, statusCode

        try {
            const response = await api.put(`posts/${id}`, post)
            statusCode = response.status
            data = response.data
        } catch (error) {
            data = "Não foi possível atualizar o post, tente novamente!"
            statusCode = error.response.status
        }
        finally {
            return { data, statusCode }
        }
    },

    delete: async (id) => {
        let data, statusCode

        try {
            const response = await api.delete(`posts/${id}`)
            data = response.data
            statusCode = response.status
        } catch (error) {
            data = "Não foi possível excluir o post, tente novamente!"
            statusCode = error.response.status
        }
        finally {
            return { data, statusCode }
        }
    }
}

export default postService