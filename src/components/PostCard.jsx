import { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import '../style.css'
function PostCard({ title, text, image }) {

    const { posts } = useContext(PostContext)
    return (
        <div className="black-theme border-custom rounded-xl xl:hover:border-white hover:border-1">
            <a href="" className='flex flex-col gap-5 p-6'>
                <h1 className='font-bold'>{title}</h1>
                <p> {text} </p>
                <img src={image} alt="sad" />
            </a>
        </div>)
}

export default PostCard