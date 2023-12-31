import ItemCategories from './ItemCategories'
import flechaLeft from '../img/icons8-menor-que-32.png'
import flechaRight from '../img/arrowR.png'
import '../style.css'

function Categories() {
    return (
        <aside className='m-auto w-custom-width2 hidden md:block text-white mb-7'>
            <div className='rounded-xl border-custom h-custom-height flex items-center justify-center gap-5'>
                <img src={flechaLeft} alt="arrow left" />
                <ItemCategories section={'Arte'}></ItemCategories>
                <ItemCategories section={'Politica'}></ItemCategories>
                <ItemCategories section={'Cine'}></ItemCategories>
                <ItemCategories section={'Social'}></ItemCategories>
                <ItemCategories section={'Redes'}></ItemCategories>
                <img src={flechaRight} alt="arrow right" />
            </div>
        </aside>
    )
}

export default Categories