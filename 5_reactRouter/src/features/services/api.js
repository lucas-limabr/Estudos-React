import axios from 'axios'

//Estou utilizando uma API pública para exemplificação que permite apenas o método GET
import { BASE_URL } from "../../config/axios.js"

const api = axios.create({
    baseURL: BASE_URL,
})

let endpoint

const serviceApi = {

    setEndpoint: (endpointApi) => {
        endpoint = endpointApi
        return serviceApi
    },

    getAll: async (filters = {}) => {
        let data, statusCode

        try {
            var response = await api.get(endpoint, {
                params: filters
            })
            data = response.data
            statusCode = response.status

        } catch (error) {
            statusCode = error.response.status
        }
        finally {
            return { data, statusCode }
        }
    },

    getById: async (id) => {
        let data, statusCode

        try {
            var response = await api.get(`${endpoint}/${id}`)
            statusCode = response.status
            data = response.data
        } catch (error) {
            statusCode = error.response.status
        }
        finally {
            return { data, statusCode }
        }
    },

    create: async (dataForm) => {
        let data, statusCode

        try {
            const response = await api.post(endpoint, dataForm)
            statusCode = response.status
            data = response.data
        } catch (error) {
            statusCode = error.response.status
        }
        finally {
            return { data, statusCode }
        }
    },

    update: async (dataForm, id) => {
        let data, statusCode

        try {
            const response = await api.put(`${endpoint}/${id}`, dataForm)
            statusCode = response.status
            data = response.data
        } catch (error) {
            statusCode = error.response.status
        }
        finally {
            return { data, statusCode }
        }
    },

    delete: async (id) => {
        let data, statusCode

        try {
            const response = await api.delete(`${endpoint}/${id}`)
            data = response.data
            statusCode = response.status
        } catch (error) {
            statusCode = error.response.status
        }
        finally {
            return { data, statusCode }
        }
    }
}

export default serviceApi