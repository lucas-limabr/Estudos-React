import serviceApi from "../../features/services/api"

export const excluir = async (id) => {
    const { data, statusCode } = await serviceApi.setEndpoint('/posts').delete(id)
    let state

    //a API pública retornar um statusCode de 200 para sucesso, mas em APIs reais, geralmente é um 204
    if (statusCode != 200) {
        state = {
            type: 'error',
            message: 'Não foi possível excluir o post, tente novamente!'
        }
    }
    else {
        state = {
            type: 'success',
            message: 'Post excluído com sucesso!'
        }
    }

    return state
}