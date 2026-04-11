import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import postService from '../../features/posts/services/postService'
import '../../assets/style/post.css'
import '../../assets/style/cadastroPost.css'

export default function Post() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [userId, setUserId] = useState("")
    const [error, setError] = useState(null)

    function backToPosts() {
        navigate('/dashboard/posts')
    }

    useEffect(() => {
        async function loadPost() {
            const { data, statusCode } = await postService.getById(id)

            if (statusCode != 200) {
                setError(data)
                return
            }

            setTitle(data.title)
            setBody(data.body)
            setUserId(data.userId)
            setError(null)
        }

        if (id) loadPost()
    }, [])

    const handleSubmit = async (e, action) => {

        e.preventDefault()
        let state

        if (action == 'excluir') {
            state = await excluir(id)
        }
        else {
            const dataForm = {
                title, body, userId
            };

            if (action == 'update') {
                state = await update(dataForm, id)
            }
            else if (action == 'create') {
                state = await create(dataForm)
            }
            else {
                throw new Error("Ação não permitida para um post");
            }
        }

        navigate('/dashboard/posts', { state })
    }

    // msm que a API de terceira que está sendo utilizada aceite o método POST, acontece uma inserção fake nela, este dado não é persistido, aqui está apenas como exemplificação que o endpoint funciona, mas os dados não são atualizados
    const create = async (dataForm) => {
        const { data, statusCode } = await postService.create(dataForm)
        let state

        if (statusCode != 201) {
            state = {
                type: 'error',
                message: data
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

    const update = async (dataForm, id) => {
        const { data, statusCode } = await postService.update(dataForm, id)
        let state

        if (statusCode != 200) {
            state = {
                type: 'error',
                message: data
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

    const excluir = async (id) => {
        const { data, statusCode } = await postService.delete(id)
        let state

        //a API pública retornar um statusCode de 200 para sucesso, mas em APIs reais, geralmente é um 204
        if (statusCode != 200) {
            state = {
                type: 'error',
                message: data
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

    if (error != null) {
        return <p style={{ clear: 'both' }}>{error}</p>
    }

    return (
        <div className='form-cadastro'>
            <h2>Detalhes do post</h2>
            <form>
                <div>
                    <label htmlFor="title">Título:</label>
                    <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className='text-area-body'>
                    <label htmlFor="body">Body:</label>
                    <textarea type="text" name="body" id="body" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="userId">Usuário autor do post:</label>
                    <select value={userId} name="userId" id="userId" onChange={(e) => setUserId(e.target.value)}>
                        <option value="">Selecione...</option>
                        <option value="1">André</option>
                        <option value="2">Bia</option>
                        <option value="3">Carlos</option>
                    </select>
                </div>

                <div className='acoes-post'>
                    {(id) ?
                        <>
                            <button className='btn-editar' onClick={(e) => handleSubmit(e, 'update')}>Editar</button>
                            <button className='btn-excluir' onClick={(e) => handleSubmit(e, 'excluir')}>Excluir</button>
                        </>
                        :
                        <button className='btn-cadastrar' onClick={(e) => handleSubmit(e, 'create')}>Cadastrar</button>
                    }
                </div>
            </form>

            <button className='back-to-posts' onClick={backToPosts}>Voltar para os posts</button>
        </div>
    )
}
