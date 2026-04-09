import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import postService from '../../features/posts/services/postService'
import '../../assets/style/post.css'

export default function Post() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [userId, setUserId] = useState("")
    const [error, setError] = useState(null)

    function backToPosts()
    {
        navigate('/dashboard/posts')
    }

    useEffect(() => {
        async function loadPost() {
            const { data, status } = await postService.getById(id)

            if (status != 200) {
                setError(data)
                return
            }

            setTitle(data.title)
            setBody(data.body)
            setUserId(data.userId)
            setError(null)
        }

        loadPost()

    }, [])

    if (error != null) {
        return <p style={{ clear: 'both' }}>{error}</p>
    }

    return (
        <div className='box-post'>
            <h2>Detalhes do post</h2>
            <p>ID do usuário que publicou: {userId}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>

            <button onClick={backToPosts}>Voltar para os posts</button>
        </div>
    )
}
