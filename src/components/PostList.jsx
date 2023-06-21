import { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import PostCard from './PostCard'

function PostList() {

    const { posts } = useContext(PostContext)

    return (
        <div className='flex flex-col gap-5 xl:w-custom-width '>
            {posts.map((post) => (
                <PostCard title={post.title} text={post.text}></PostCard>
            ))}
        </div>
    )
}

export default PostList