import landscapePlaceHolder from '../assets/portfolio/IMG_0243.png'
import wildlifePlaceHolder from '../assets/portfolio/IMG_9098-AI.jpg'

export const Portfolio: React.FC = () => {
    return (
        <div>
            <div className="flex justify-center mt-32 columns-2 gap-10 drop-shadow-3xl">
                <img src={landscapePlaceHolder} className=' flex h-96'/>
                <img src={wildlifePlaceHolder} className='flex h-96'/>
            </div>
        </div>
    )
}