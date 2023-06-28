import '../style.css'
function PostCard({ title, text, image }) {
    return (
        <div className="black-theme border-custom rounded-xl xl:hover:border-white hover:border-1">
            <a href="" className='flex flex-col gap-5 p-6'>
                <article className='flex gap-2 justify-between'>
                    <span className='text-sm font-semibold text-gray-400'>Farit says:</span>
                    <time class="text-sm font-semibold text-gray-400" datetime="2023-06-28">28 de junio de 2023</time>
                </article>
                <h1 className='font-medium text-lg'>{title}</h1>
                <p> {text} </p>
                <img src={image} />
                <div className="flex gap-5 justify-center">
                    <button className='bg-yellow-500 p-2'>Editar</button>
                    <button className='bg-red-700 p-2'>Borrar</button>
                </div>
            </a>
        </div>)
}
export default PostCard