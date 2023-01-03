import './index.css'

const SelectColorButton = ({ color, onClick, selected }) => {
    let classNames = 'colorButton'
    if ((typeof color) === 'string') {
        classNames += (' ' + color + 'DarkBackground')
    }

    if (selected) {
        classNames += ' selected'
    }
    // function to handle color change

    return (
        <button className={classNames} onClick={()=>onClick(color)}>
        </button>
    )
}

export default SelectColorButton