import clsx from "clsx";
import { useStore } from "../../../../../store";
import './slide.css';
import { useState } from "react";
import './responsive.css'

import slide1 from './ImageHome/slide1-1.jpg'
import slide2 from './ImageHome/slide2-1.jpg'
import slide3 from './ImageHome/slide3-1.jpg'


const SlideSale = () => {
    const [state, dispatch] = useStore()
    const [left, setLeft] = useState(0)
    const [slideIndex, setSlideIndex] = useState(0)
    const saleList = [
        {
            title: "sale",
            content: '30% off'
        },
        {
            title: "extra",
            content: '35% off'
        },
        {
            title: "9% up",
            content: 'up to'
        },
    ]
    const handleNextSlide = () => {
        let slide = document.querySelector('.slide');
        slide.style.left = `-${left + 100}%`;
        setLeft(left + 100);
        setSlideIndex(prev => prev + 1)
        // console.log(left)
        if (left === 200  ) {
            setLeft(0)
            slide.style.left = 0
            setSlideIndex(0)
        }
        slide.style.transition = 'all 0.3s ease-in-out 0s';
        console.log(slideIndex)
       
    };
    const handlePrevSlide = () => {
        let slide = document.querySelector('.slide');
        // const sale = document.querySelector('.sale')
        slide.style.left = `-${left - 100}%`;
        setLeft(left - 100);
        setSlideIndex(prev => prev - 1)
        if (left === 0) {
            setLeft(200)
            slide.style.left = '-200%'
            setSlideIndex(2)
        }
        slide.style.transition = 'all 0.3s ease-in-out 0s';
        // saleee.style.visibility = 'visible'
    };
    return (
        <div className={clsx('slideSale')}>
            <div className={clsx('slide')}>
                {saleList.map((saleItem, index) => (

                    <div key={index} className={`slide${index + 1}`}>
                            <span className={slideIndex === index  ? 'sale showSaleContent' : 'sale'}>
                                {saleItem.title.toUpperCase()}
                                <span className='sale30'>
                                    {saleItem.content.toUpperCase()}
                                </span>
                            </span>

                    </div>
                ))}
                 
            </div>
            <span className='controls'>
                <span className='left'
                    onClick={handlePrevSlide}
                >
                    <i className="fas fa-chevron-left"></i>
                </span>
                <span className='right'
                    onClick={handleNextSlide}
                >
                    <i className="fas fa-chevron-right"></i>
                </span>
            </span>
        </div>
    )
};

export default SlideSale;