import serviceApi from "../../features/services/api"

export const update = async (dataForm, id) => {
    const { data, statusCode } = await serviceApi.setEndpoint('posts').update(dataForm, id)
    let state

    if (statusCode != 200) {
        state = {
            type: 'error',
            message: 'Não foi possível atualizar o post, tente novamente!'
        }
    }
    else {
        state = {
            type: 'success',
            message: 'Post atualizado com sucesso!'
        }
    }

    return state
}