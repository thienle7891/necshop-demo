
import './style.css';

const Separator = () => {
    return (
        <div style={{position: 'relative',
                paddingBottom: 0
            }}>

                <div className='lineLeft'></div>
                <div className='separator'></div>
                <div className='lineRight'></div>
            </div>
    )
};

export default Separator;