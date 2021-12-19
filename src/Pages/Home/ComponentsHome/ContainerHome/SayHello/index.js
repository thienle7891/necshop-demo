import './styleSh.css';

import Category from './category'
import Separator from '../separator';
import './responsive.css';

const SayHello = () => {
    return (
        <div className="sayHello">

            <div className='grid'>
                <Separator></Separator>
                <div className='sayHelloTitle' >SAY HELLO</div>

                <Category></Category>

            </div>
        </div>
    )
};

export default SayHello;