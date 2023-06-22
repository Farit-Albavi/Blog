import '../style.css'
import { PostContext } from '../context/PostContext'
import { useState, useContext } from 'react'
function AddPost() {

    const { addNewPost, posts } = useContext(PostContext)

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    const handleEvent = (e) => {
        e.preventDefault()
        addNewPost({
            title,
            text,
            image
        });
        setTitle('')
        setText('')
        setImage('')
    }

    return (
        // era hidden el form en mobile
        <form className='mx-auto w-full xl:block xl:p-5 border-custom rounded-xl black-theme' onSubmit={handleEvent}> { }
            <fieldset className='flex flex-col gap-2'>
                {/* Title */}
                <legend className='font-bold mb-2'>Crear nuevo post:</legend>
                <input maxLength={60} placeholder='Escriba un título...' type="text" className=' rounded-sm border-input xl:p-3 black-theme'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                {/* Text */}
                <textarea placeholder='Escriba su texto aquí...' cols="15" rows="8" className=' rounded-sm border-input xl:p-3 black-theme'
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                ></textarea>
                {/* File */}
                <input className='w-full' type="file" name="" id="" onChange={handleFileChange} />
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