import { useState, useEffect } from 'react';
import './style.css';
import './responsive.css';

const ProductPage = ({pageLength}) => {
    const [count, setCount] = useState(1);
    const [pages, setPages] = useState([]);
    const [left, setLeft] = useState(0)
    const [pageIndex, setPageIndex] = useState(0)
    useEffect(()=> {
        if (count <= pageLength) {
            setCount(count + 1);
            setPages(prev => [...prev, count]);
        }
    }) 
    const handleLeft = () => {
        let pageRow = document.querySelector('.productRow');
        // const sale = document.querySelector('.sale')
        pageRow.style.left = `-${left - 1}00%`;
        setLeft(left - 1);
        setPageIndex(prev => prev - 1)
        if (left === 0) {
            setLeft(2)
            pageRow.style.left = '-200%'
            setPageIndex(2)
        }
        pageRow.style.transition = 'all 0.3s ease-in-out 0s';
    }
    const handleRight = () => {
        

        let pageRow = document.querySelector('.productRow');
        pageRow.style.left = `-${left + 1}00%`;
        setLeft(left + 1);
        setPageIndex(prev => prev + 1)
        if (left ===  pageLength ) {
            setLeft(0)
            pageRow.style.left = 0
            setPageIndex(0)
        }
        pageRow.style.transition = 'all 0.3s ease-in-out 0s';
        console.log(pageIndex)
    }

    const handlePageNumber = (page) => {
        let pageRow = document.querySelector('.productRow');
        pageRow.style.transition = 'all 0.3s ease-in-out 0s';
        pageRow.style.left = `-${page}00%`;
        setLeft(page );
        setPageIndex(page )
        console.log(page)
    } 
    return (
        <div className="productPage">
            <div className="productPageControls">
                <span className='productPageLeft'
                    onClick={handleLeft}
                >
                    <i className="fas fa-chevron-left"></i>
                </span>
                {pages.map(page => (
                    <span className='pageNumber' 
                        key={page}
                        onClick={() =>handlePageNumber(page)}
                    >
                        {page}
                    </span>
                ))}
                <span className='productPageRight'
                    onClick={handleRight}
                >
                    <i className="fas fa-chevron-right"></i>
                </span>
            </div>
        </div>  
    )
};

export default ProductPage;