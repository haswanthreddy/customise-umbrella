import { COLOR_NAMES } from '../../constants'
import './index.css';
import '../../index.css'

const PageContainer = ({ backgroundColor = COLOR_NAMES.SKY_BLUE, children }) => {
    let classNames = 'pageContainer'
    if ((typeof backgroundColor) === 'string') {
        classNames += ' ' + backgroundColor
    }
    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default PageContainer