import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import postService from '../../features/posts/services/postService'

export default function Post() {

    const { id } = useParams()

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [userId, setUserId] = useState("")


    useEffect(() => {
        const { postData, status } = postService.getById(id)

        if (!status) {
            return <p>${postData}</p>
        }

        setTitle(postData.title)
        setBody(postData.body)
        setUserId(postData.userId)
    }, [])

    return (
        <div>
            <h2>Detalhes do post</h2>
            <p>ID do usuário que publicou: ${userId}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    )
}
