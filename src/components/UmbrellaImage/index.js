import { COLOR_NAMES } from "../../constants"
import './index.css'

const UmbrellaImage = ({ image = COLOR_NAMES.SKY_BLUE, className, uploadedImage }) => {
    let path = '/assets/'
    if ((typeof image) === 'string') {
        path += image + '.png'
    }
    return (
        <div className={className}>
            <img className='umbrellaImage' src={path} alt='umbrellaImage' />
            {uploadedImage && <img className='uploadedImage' src={uploadedImage} alt='uploadedImage'/>}
        </div>
    )
}
export default UmbrellaImage;