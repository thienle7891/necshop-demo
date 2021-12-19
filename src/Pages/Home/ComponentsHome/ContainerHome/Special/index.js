import clsx from "clsx";
import './style.css'
import './responsive.css'

const Special = () => {
    return (
        <div className='grid'>

            <div className='grid wide'>
                <div className='row' 
                    style={{width: '100%'}}
                >

                    <div className='col l-6 m-6 c-6' style={{position: 'relative',}}>

                        <div className={clsx('specialOne', 'specialItem')}>
                            <span className='fakeBox1'>

                            </span>
                            <span className='fakeBox2'>
                            </span>
                            <span className={clsx('specialContent')}>
                                <h2>BUY 2 ITEMS GET 1</h2>
                                <div className={'free'}>
                                    <h4>FREE</h4>
                                </div>
                                <p>LEARN MORE</p>
                            </span>
                        </div>
                    </div>

                    <div className='col l-6 m-6 c-6' style={{position: 'relative',}}>
                        <div className={clsx('specialTwo', 'specialItem')}>
                            <span className='fakeBox1'>

                            </span>
                            <span className='fakeBox2'>
                            </span>
                            <div className={clsx('specialContent')}>
                                <h2>EVENING HEADPHONE</h2>
                                <div className={'free'}>
                                    <h4>2016</h4>
                                </div>
                                <p>LEARN MORE</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        )
};

export default Special;