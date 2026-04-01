import axios from 'axios'

//Estou utilizando uma API pública para exemplificação que permite apenas o método GET
import {BASE_URL} from "../../../config/axios"

const api = axios.create({
    baseUrl: BASE_URL,
})

const postService = {

    getAll: async () => {
        try {
            var statusRequest
            
            const response = await axios.get('/posts')
            const data = await response.json()

            if (!response.ok) {
                throw new Error("Não foi possível buscar os posts");
            }

            console.log(data)

            statusRequest = true
            return data, statusRequest
        } catch (error) {
            statusRequest = false
            return error.message, statusRequest
        }
    },

    getById: async (id) => {
        try {
            var statusRequest
            
            const response = await axios.get(`/posts/${id}`)
            const data = await response.json()

            if (!response.ok) {
                throw new Error(`Não foi possível buscar o post de id ${id}`);
            }

            statusRequest = true
            return data, statusRequest

        } catch (error) {
            statusRequest = false
            return error.message, statusRequest
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