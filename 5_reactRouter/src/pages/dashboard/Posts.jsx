import React, { useEffect, useState } from 'react'
import postService from '../../features/posts/services/postService'
import PostCard from '../../components/PostCard'

export default function Posts() {

  const [posts, setPosts] = useState()

  useEffect(() => {
    const { postsData, status } = postService.getAll

    if (!status) {
      return <p>${postsData}</p>
    }

    setPosts(postsData)
  }, [])



  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Página de posts</h2>

      <div className='postCard'>
        {
          posts.map((post) => {
            <PostCard key={post.id} post={post} />
          })
        }
      </div>
    </div>
  )
}
