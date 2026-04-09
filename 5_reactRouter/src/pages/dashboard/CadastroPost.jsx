import React, { useState } from 'react'
import '../../assets/style/cadastroPost.css'
import postService from '../../features/posts/services/postService'
import { useNavigate } from 'react-router-dom'

export default function CadastroPost() {

    const navigate = useNavigate()
    
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [userId, setUserId] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const dataForm = {
            title, body, userId
        }

        const {data, status} = await postService.create(dataForm)

        if(status != 201)
        {
            setError(data)
            return
        }

        // msm que a API de terceira que está sendo utilizada aceite o método POST, acontece uma inserção fake nela, este dado não é persistido, aqui está apenas como exemplificação que o endpoint funciona, mas os dados não são atualizados
        navigate('/dashboard/posts')
    }

    return (
        <div className='form-cadastro'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="body">Body</label>
                    <input type="text" name="body" id="body" onChange={(e) => setBody(e.target.value)} />
                </div>

                <div>
                    <select name="userId" id="userId" onChange={(e) => setUserId(e.target.value)}>
                        <option value="">Selecione...</option>
                        <option value="1">André</option>
                        <option value="2">Bia</option>
                        <option value="3">Carlos</option>
                    </select>
                </div>

                <div className='btn-cadastrar'>
                    <button type='submit'>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}
