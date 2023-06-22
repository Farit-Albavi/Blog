import { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import PostCard from './PostCard'

function PostList() {

    const { posts } = useContext(PostContext)

    return (
        <div className='flex flex-col gap-5 xl:w-custom-width '>
            {posts.map((post) => {
                return <PostCard title={post.title} text={post.text} image={post.image} key={post.id} />;
            })}
        </div>
    )
}

export default PostList