import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import serviceApi from '../../features/services/api'
import '../../assets/style/post.css'
import '../../assets/style/cadastroPost.css'
import { create } from '../../utils/post/create'
import { update } from '../../utils/post/update'
import { excluir } from '../../utils/post/excluir'

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
            const { data, statusCode } = await serviceApi.setEndpoint('/posts').getById(id)

            if (statusCode != 200) {
                setError('Não foi possível buscar o post, tente novamente!')
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

        navigate('/dashboard/posts', {state})
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
