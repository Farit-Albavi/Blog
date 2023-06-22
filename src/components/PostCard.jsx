import '../style.css'
function PostCard({ title, text, image }) {
    return (
        <div className="black-theme border-custom rounded-xl xl:hover:border-white hover:border-1">
            <a href="" className='flex flex-col gap-5 p-6'>
                <p className='text-sm font-semibold text-gray-400'>User</p>
                <h1 className='font-medium text-lg'>{title}</h1>
                <p> {text} </p>
                <img src={image} />
            </a>
        </div>)
}
export default PostCard