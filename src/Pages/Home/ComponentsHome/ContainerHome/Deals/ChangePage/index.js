import { useState, useEffect } from 'react';
import './style.css';
import './responsive.css'

const ChangePage = () => {
    const [left, setLeft] = useState(0)
    const [pageIndex, setPageIndex] = useState(0)
    
    const handleLeft = () => {
        let pageRow = document.querySelector('.dealsRow');
        pageRow.style.left = `-${left - 1}00%`;
        setLeft(left - 1);
        setPageIndex(prev => prev - 1)
        if (left === 0) {
            setLeft(1)
            pageRow.style.left = '-100%'
            setPageIndex(1)
        }
        pageRow.style.transition = 'all 0.3s ease-in-out 0s';
    }
    const handleRight = () => {
        

        let pageRow = document.querySelector('.dealsRow');
        pageRow.style.left = `-${left + 1}00%`;
        setLeft(left + 1);
        setPageIndex(prev => prev + 1)
        if (left ===  1 ) {
            setLeft(0)
            pageRow.style.left = 0
            setPageIndex(0)
        }
        pageRow.style.transition = 'all 0.3s ease-in-out 0s';
        console.log(pageIndex)
    }

    
    return (
        <div className="changePage">
            <div className="changePageControls">
                <span className='changePageLeft'
                    onClick={handleLeft}
                >
                    <i className="fas fa-chevron-left"></i>
                </span>
                
                <span className='changePageRight'
                    onClick={handleRight}
                >
                    <i className="fas fa-chevron-right"></i>
                </span>
            </div>
        </div>  
    )
};

export default ChangePage;