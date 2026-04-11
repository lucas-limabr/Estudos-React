import { useEffect, useState } from 'react'
import postService from '../../features/posts/services/postService'
import PostCard from '../../components/PostCard'
import PostFilters from '../../components/PostFilters'
import { postParams } from '../../hook/filterParams/paramsPosts'
import { useLocation, useNavigate } from 'react-router-dom'
import Alert from '../../components/Alert'

export default function Posts() {

  const navigate = useNavigate()
  const location = useLocation()

  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)
  const [feedback, setFeedback] = useState(null)
  const [postsVazio, setPostsVazio] = useState(null)

  const { userId, title, size } = postParams()

  useEffect(() => {
    const timeout = setTimeout(() => {
      async function loadPosts() {

        const filters = {}

        if (userId) filters.userId = userId
        if (title) filters.title = title
        if (size) filters.size = size

        const { data, statusCode } = await postService.getAll(filters)

        if (statusCode != 200) {
          setError(data)
          return
        }

        //funcionalidade de definir itens por página, que deve ser feita no backend, mas aqui, por estar utilizando uma API de terceiro que não me dá possibilidade de paginação, foi feita no front-end mesmo para exemplificar
        let postsCurrent = (size) ? data.slice(0, size) : data
        setPosts(postsCurrent)
        setError(null)

        //IMPORTANTE: eu não verifico posts.length == 0, pois, qualquer state não é setado imediatamente, então, por mais que na linha anterior eu tenha feito um setPosts(postsCurrent) posts ainda está vazio. O que eu preciso fazer é usar o valor de uma variável comum, em que a atribuição é feita automaticamente, sendo o resultado mais atualizado
        if (postsCurrent.length == 0) {
          setPostsVazio('Não há posts')
        }
        else {
          setPostsVazio(null)
        }

      }

      loadPosts()
    }, 800)

    return () => clearTimeout(timeout)
  }, [userId, title, size])

  useEffect(() => {
    if (location.state) {
      setFeedback(location.state)

      // limpa o state da rota
      navigate(location.pathname, { replace: true })
    }
  }, [location.state]);

  if (error != null) {
    return <p style={{ clear: 'both' }}>{error}</p>
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Página de posts</h2>
      {feedback &&
        (
          <Alert feedback={feedback} />
        )}

      {postsVazio &&
        (
          <p>{postsVazio}</p>
        )}

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
