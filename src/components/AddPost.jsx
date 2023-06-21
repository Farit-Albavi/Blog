import '../style.css'
import { PostContext } from '../context/PostContext'
import { useState, useContext } from 'react'
function AddPost() {

    const { addNewPost, posts } = useContext(PostContext)

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const handleEvent = (e) => {
        e.preventDefault()
        addNewPost({
            title,
            text
        });
        setTitle('')
        setText('')
    }

    return (
        // era hidden el form en mobile
        <form className='mx-auto w-full xl:block xl:p-5 border-custom rounded-xl black-theme' onSubmit={handleEvent}> { }
            <fieldset className='flex flex-col gap-2'>
                <legend className='font-bold mb-2'>Crear nuevo post:</legend>
                <input maxLength={60} placeholder='Escriba un título...' type="text" className=' rounded-sm border-input xl:p-3 black-theme'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <textarea placeholder='Escriba su texto aquí...' cols="15" rows="8" className=' rounded-sm border-input xl:p-3 black-theme'
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                ></textarea>
                <input className='w-full' type="file" name="" id="" />
            </fieldset>
            <div className='flex justify-end'>
                <button className='mt-4'>
                    <span class="button_top">Post</span>
                </button>
            </div>

        </form>
    )
}

export default AddPost