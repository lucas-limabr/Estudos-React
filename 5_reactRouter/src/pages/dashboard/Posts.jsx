import React, { useEffect, useState } from 'react'
import postService from '../../features/posts/services/postService'
import PostCard from '../../components/PostCard'

export default function Posts() {

  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadPosts() {
      const { data, status } = await postService.getAll()

      if (status != 200) {
        setError(data)
        return
      }

      setPosts(data)
      setError(null)
    }

    loadPosts()
  }, [])

  if (error != null) {
    return <p style={{ clear: 'both' }}>{error}</p>
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Página de posts</h2>

      {

      }

      <div className='postCard'>
        {posts && (
          posts.map((post) => <PostCard key={post.id} post={post} />
          )
        )}
      </div>
    </div>
  )
}
