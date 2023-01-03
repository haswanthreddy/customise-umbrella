import '../../index.css';
import './index.css'


const ImageUploadButton = ({ onChange, color }) => {
    const handleImageUpload = (event) => {
        onChange(URL.createObjectURL(event.target.files[0]))
    }

    let classNames = 'uploadImageButton'

    if ((typeof color) === 'string') {
        classNames += (' ' + color + 'DarkBackground')
    }

    return (
        <label className={classNames}>
            UPLOAD LOGO
            <input type="file" onChange={handleImageUpload} accept="image/png,image/jpeg"/>
        </label>
    )
}


export default ImageUploadButton