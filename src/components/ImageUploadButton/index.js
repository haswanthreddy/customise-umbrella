import React, { useState } from 'react';


const ImageUploadButton = () => {
    const [image, setImage] = useState();

    const handleImageUpload = (event) => {

    }

    return (
        <div>
            <input type="file" onChange={handleImageUpload}/>
        </div>
    )
}


export default ImageUploadButton