import serviceApi from "../../features/services/api"

export const create = async (dataForm) => {
    const { data, statusCode } = await serviceApi.setEndpoint('/posts').create(dataForm)
    let state

    if (statusCode != 201) {
        state = {
            type: 'error',
            message: 'Não foi possível criar o post, tente novamente!'
        }
    }
    else {
        state = {
            type: 'success',
            message: 'Post criado com sucesso!'
        }
    }

    return state
}