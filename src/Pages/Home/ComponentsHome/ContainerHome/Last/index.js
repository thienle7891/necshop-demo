
import { useState } from 'react';
import './style.css'

const LastContainer = () => {
    const [indexSlide, setIndexSlide] = useState(0)
    const lastList = [
        {
            name: 'JON MACTIN CERA',
            comment: 'Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, labore et olore. magna asellus dolor enim, faucibus egestas scelerisque hendre aliquet sed lorem Surround yourself with angels client saynome thing.',
            avatar: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/av3.png'
        },
        {
            name: 'JON MACTIN CERA',
            comment: 'Do eiusmod tempor incididunt ut labore et dolore magna aliquaegestas scelerisque hendre aliquet sed lorem Surround yourself with angels client saynome thing.',
            avatar: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/av1.png'
        },
        {
            name: 'JON MACTIN CERA',
            comment: 'Do eiusmod tempor incididunt ut labor',
            avatar: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/av1.png'
        },
    ]

    const handleChangeSlide = (index) => {
        const slide = document.querySelector('.lastContainerContentRow');
        if (index === 1){
            setIndexSlide(1)
            slide.style.left = '-100%'
        }
        if (index === 2){
            setIndexSlide(2)
            slide.style.left = '-200%'
        }
        if (index === 0){
            setIndexSlide(0)
            slide.style.left = '0'
        }
    }
    return (
        <div className="grid">
            <div className="lastContainer">
                <div className="grid wide row">
                    <div className="col l-3 m-1 c-1"></div>
                    <div className="col l-6 m-10 c-10">
                        <div className="row lastContainerBlock">
                            <div className="lastContainerContent">
                                <div className="lastContainerContentRow" >
                                    {lastList.map((lastItem, index) => (
                                        <div className="lastContainerContentTitle" key={index}>
                                            <h3>{lastItem.name}</h3>
                                            <p>
                                                {lastItem.comment}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <span className="lastContainerAvatart">
                                    <span>
                                        {lastList.map((lastItem, index) => (
                                            <span key={index}>
                                                <img src={lastItem.avatar} className={indexSlide === index && 'showBorder'}
                                                    onClick={() => handleChangeSlide(index)}
                                                />
                                            </span>
                                        ))}
                                    </span>
                                </span>
                                    
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-1 c-1"></div>
                </div>
            </div>
        </div>
    )
};

export default LastContainer; 