import '../style.css'
function AddPost() {
    return (
        <form className='mx-auto w-full p-5 border-custom rounded-xl black-theme'>
            <fieldset className='flex flex-col gap-2'>
                <legend className='font-bold mb-2'>Crear nuevo post:</legend>
                <input placeholder='Escriba un título...' type="text" className=' rounded-sm border-input p-3 black-theme' />
                <textarea placeholder='Escriba su texto aquí...' cols="15" rows="8" className=' rounded-sm border-input p-3 black-theme'></textarea>
                <input type="file" name="" id="" />
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