

import './style.css';
import './responsive.css';
import Separator from '../separator'
import ChangePage from './ChangePage';
import { useState } from 'react';

function Deals() {
    const deals1 = [
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/3-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '$123.20',
            prevprice: '$123.20'
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/17-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '$123.20',
            prevprice: '$123.20'
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/14-1-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '$123.20',
            prevprice: '$123.20'
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/15-1-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '$123.20',
            prevprice: '$123.20'
        },
    ]
    const deals2 = [
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/3-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '251.20',
            prevprice: '251.20'
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/15-1-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '251.20',
            prevprice: '251.20'
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/3-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '251.20',
            prevprice: '251.20'
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/15-1-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '251.20',
            prevprice: '251.20'
        },
    ]
    const deals3 = [
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/15-1-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '251.20',
            prevprice: '251.20',
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/17-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '251.20',
            prevprice: '251.20'
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/3-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '251.20',
            prevprice: '251.20'
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/15-1-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '251.20',
            prevprice: '251.20'
        },
    ]
    const deals4 = [
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/17-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '251.20',
            prevprice: '251.20'
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/15-1-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '251.20',
            prevprice: '251.20'
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/3-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '251.20',
            prevprice: '251.20'
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/15-1-330x330.jpg',
            name: 'aliquet pellentes',
            newprice: '251.20',
            prevprice: '251.20'
        },
    ]

    const [indexHover, setIndexHover] = useState(false);
    const [direction, setDirections] = useState('');
    const handleMouseEnter = (e) => {
        const itemHover = e.target.closest(".dealItemHover")

        const {left, top, width, height} = e.target.getBoundingClientRect();
        
        // itemHover.style.left = `${e.clientX}px`
        // itemHover.style.top = `${e.clienty}px`

        if ( e.clientY < (top + 20)) {
            setDirections('top')
            setIndexHover(true)
        }
        if ( e.clientY > (top + width - 20)) {
            setDirections('bottom')
            setIndexHover(true)
        }
        if ( e.clientX < (left + 20)) {
            setDirections('left')
            setIndexHover(true)
        }
        if ( e.clientX > (left + width - 20)) {
            setDirections('right')
            setIndexHover(true)
        }
        // console.log(e.clientX, e.clientY)
    }
    
    return (
        <div className="grid">
            <div className="deals">
                <Separator></Separator>
                <div className="dealsOfWeek">
                    <h1>DEALS OF THE WEEK</h1>
                </div>
                <div className="dealsBg">
                    <div className="grid wide">
                        <div className="dealsFirst">
                            <div className="dealsRow">
                                <div className="page">
                                    <div className="deal">
                                        <div className="row">
                                            {deals1.map((deal, index) => (
                                                <div className="dealItem" key={index}>
                                                    <span className="dealImage">
                                                        <img  src={deal.image} 
                                                            onMouseEnter={handleMouseEnter}
                                                        />
                                                    </span>
                                                    <div className={indexHover === true ? `dealOption ${direction}Show` : "dealOption"}>
                                                        <div className="dealOptionContent">
                                                            <h2>{deal.name.toUpperCase()}</h2>
                                                            <span className="dealOptionPrice">
                                                                <span className="">
                                                                    <h3>{deal.newprice}</h3>
                                                                    <h4>{deal.prevprice}</h4>
                                                                </span>
                                                            </span>
                                                            <div className="dealSelector">
                                                                <span className="">
                                                                    <i className="fas fa-shopping-basket"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="far fa-heart"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="far fa-clone"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i class="fas fa-search"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="endIn">
                                        <div className= "endInContent">
                                            <div className="endInTitle">
                                                <h3>END IN:</h3>
                                            </div>
                                            <div className="timeEndIn">

                                                <div className="timeDeal">
                                                    <span className="timeDealCount">
                                                        <span className="">

                                                            <h2>2000</h2>
                                                            <p>d</p>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="timeDeal">
                                                    <span className="timeDealCount">
                                                        <span className="">
                                                            <h2>2000</h2>
                                                            <p>d</p>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="timeDeal">
                                                    <span className="timeDealCount">
                                                    <span className="">
                                                            <h2>2000</h2>
                                                            <p>d</p>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="timeDeal">
                                                    <span className="timeDealCount">
                                                    <span className="">
                                                            <h2>2000</h2>
                                                            <p>d</p>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="deal">
                                        <div className="row">
                                            {deals2.map((deal, index) => (
                                                <div className="dealItem" key={index}>
                                                    <span className="dealImage">
                                                        <img  src={deal.image} 
                                                            onMouseEnter={handleMouseEnter}
                                                        />
                                                    </span>
                                                    <div className={indexHover === true ? `dealOption ${direction}Show` : "dealOption"}>
                                                        <div className="dealOptionContent">
                                                            <h2>{deal.name.toUpperCase()}</h2>
                                                            <span className="dealOptionPrice">
                                                                <span className="">
                                                                    <h3>{deal.newprice}</h3>
                                                                    <h4>{deal.prevprice}</h4>
                                                                </span>
                                                            </span>
                                                            <div className="dealSelector">
                                                                <span className="">
                                                                    <i className="fas fa-shopping-basket"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="far fa-heart"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="far fa-clone"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i class="fas fa-search"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="page">
                                    <div className="deal">
                                        <div className="row">
                                            {deals3.map((deal, index) => (
                                                <div className="dealItem" key={index}>
                                                    <span className="dealImage">
                                                        <img  src={deal.image} 
                                                            onMouseEnter={handleMouseEnter}
                                                        />
                                                    </span>
                                                    <div className={indexHover === true ? `dealOption ${direction}Show` : "dealOption"}>
                                                        <div className="dealOptionContent">
                                                            <h2>{deal.name.toUpperCase()}</h2>
                                                            <span className="dealOptionPrice">
                                                                <span className="">
                                                                    <h3>{deal.newprice}</h3>
                                                                    <h4>{deal.prevprice}</h4>
                                                                </span>
                                                            </span>
                                                            <div className="dealSelector">
                                                                <span className="">
                                                                    <i className="fas fa-shopping-basket"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="far fa-heart"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="far fa-clone"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i class="fas fa-search"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="endIn">
                                        <div className="endInContent">
                                            <div className="endInTitle">
                                                <h3>END IN:</h3>
                                            </div>
                                            <div className="timeEndIn">

                                                <div className="timeDeal">
                                                    <span className="timeDealCount">
                                                        <span className="">

                                                            <h2>2000</h2>
                                                            <p>d</p>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="timeDeal">
                                                    <span className="timeDealCount">
                                                        <span className="">
                                                            <h2>2000</h2>
                                                            <p>d</p>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="timeDeal">
                                                    <span className="timeDealCount">
                                                    <span className="">
                                                            <h2>2000</h2>
                                                            <p>d</p>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="timeDeal">
                                                    <span className="timeDealCount">
                                                    <span className="">
                                                            <h2>2000</h2>
                                                            <p>d</p>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="deal">
                                        <div className="row">
                                            {deals4.map((deal, index) => (
                                                <div className="dealItem" key={index}>
                                                    <span className="dealImage">
                                                        <img  src={deal.image} 
                                                            onMouseEnter={handleMouseEnter}
                                                        />
                                                    </span>
                                                    <div className={indexHover === true ? `dealOption ${direction}Show` : "dealOption"}>
                                                        <div className="dealOptionContent">
                                                            <h2>{deal.name.toUpperCase()}</h2>
                                                            <span className="dealOptionPrice">
                                                                <span className="">
                                                                    <h3>{deal.newprice}</h3>
                                                                    <h4>{deal.prevprice}</h4>
                                                                </span>
                                                            </span>
                                                            <div className="dealSelector">
                                                                <span className="">
                                                                    <i className="fas fa-shopping-basket"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="far fa-heart"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="far fa-clone"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i class="fas fa-search"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                    
                            </div>
                            <ChangePage></ChangePage>                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deals;