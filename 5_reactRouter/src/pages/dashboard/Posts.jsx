import { useEffect, useState } from 'react'
import postService from '../../features/posts/services/postService'
import PostCard from '../../components/PostCard'
import PostFilters from '../../components/PostFilters'
import { postParams } from '../../hook/filterParams/paramsPosts'
import { useNavigate } from 'react-router-dom'

export default function Posts() {

  const navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  const { userId, title, size } = postParams()

  useEffect(() => {
    const timeout = setTimeout(() => {
      async function loadPosts() {

        const filters = {}

        if (userId) filters.userId = userId
        if (title) filters.title = title
        if (size) filters.size = size

        const { data, status } = await postService.getAll(filters)

        if (status != 200) {
          setError(data)
          return
        }

        //funcionalidade de definir itens por página, que deve ser feita no backend, mas aqui, por estar utilizando uma API de terceiro que não me dá possibilidade de paginação, foi feita no front-end mesmo para exemplificar
        (size) ? setPosts(data.slice(0, size)) : setPosts(data)
        setError(null)
      }

      loadPosts()
    }, 800)

    return () => clearTimeout(timeout)
  }, [userId, title, size])

  if (error != null) {
    return <p style={{ clear: 'both' }}>{error}</p>
  }

  if (posts.length == 0) {
    return <p style={{ clear: 'both' }}>Não há posts</p>
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Página de posts</h2>

      <button className='redirect-cadastrar-post' onClick={() => navigate('cadastrar')}>Cadastrar post</button>
      <PostFilters />
      <div className='postCard'>
        {posts && (
          posts.map((post) => <PostCard key={post.id} post={post} />
          )
        )}
      </div>
    </div>
  )
}
