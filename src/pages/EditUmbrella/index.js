import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer';
import UmbrellaImage from '../../components/UmbrellaImage';
import SelectColorButton from '../../components/SelectColorButton';
import { COLOR_NAMES } from '../../constants';
import ImageUploadButton from '../../components/ImageUploadButton';
import '../../index.css'
import './index.css'



/**
 * @description Edit Umbrella page which renders umbrella image and changes colors, and when image uploaded
 * places on the logo position of umbrella
 */

const EditUmbrella = () => {
    const [color, setColor] = useState(COLOR_NAMES.SKY_BLUE);
    const [uploadedImage, setUploadedImage] = useState('');

    const handleColorChange = (selectedColor) => {
        setColor(selectedColor)
    }

    const renderSelectColorButtons = () => {
        const colors = Object.values(COLOR_NAMES)
        const selectColorButtons = []
        for (let i = 0; i < colors.length; i++) {
            selectColorButtons.push(
                <SelectColorButton
                    onClick={handleColorChange}
                    key={colors[i]}
                    color={colors[i]}
                    selected={color === colors[i]}
                />
            )
        }
        return selectColorButtons
    }

    return (
        <>
            { /** Main div - the flex container holding image and customization controls .i.e., upload 
                    * image button, select color button, titles and description*/
            }
            <PageContainer backgroundColor={color}>
                { /** Image container that has umbrella's image*/}
                <UmbrellaImage image={color} className='subContainer' uploadedImage={uploadedImage} />
                { /** Customization controls container that contains color buttons and upload photo button*/}
                <div className='subContainer'>
                    <div>
                        <h1 className='pageTitle'>Custom Umbrella</h1>
                        <div className='colorButtonsContainer'>
                            { renderSelectColorButtons() }
                        </div>
                        <h2 className='secondTitle'>Customize your umbrella</h2>
                        <p>upload a logo for an instant preview</p>
                        <div>
                            <p className='uploadDescription'>.png and .jpg files only. Max size is 5MB.</p>
                            <ImageUploadButton onChange={(image)=>setUploadedImage(image)} color={color}/>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </>
    )
}

export default EditUmbrella