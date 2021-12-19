
import './style.css';
import Separator from '../separator';
import './responsive.css'
import ProductPage from './ProductPage';

const BestSellers = () => {

    const buttons = ['accessories', 'audio', 'headphone']
    const productSpecial = {
        name: 'silicondust hdhomerun',
        newPrice: '£132.00',
        prevPrice: '£132.00',
        image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/1-330x330.jpg',
        image2: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/2-330x330.jpg'

    };
    const products1 = [
        {
            name: 'silicondust hdhomerun',
            newPrice: '£132.00',
            prevPrice: '£132.00',
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/15-1-330x330.jpg',
            image2: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/14-1-330x330.jpg'

        },
        {
            name: 'silicondust hdhomerun',
            newPrice: '£132.00',
            prevPrice: '£132.00',
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/17-330x330.jpg',
            image2: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/16-330x330.jpg'

        },
        {
            name: 'silicondust hdhomerun',
            newPrice: '£132.00',
            prevPrice: '£132.00',
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/15-1-330x330.jpg',
            image2: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/16-330x330.jpg'


        },
        {
            name: 'silicondust hdhomerun',
            newPrice: '£132.00',
            prevPrice: '£132.00',
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/15-1-330x330.jpg',
            image2: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/14-1-330x330.jpg'


        },
    ]
    const products2 = [
        {
            name: 'silicondust hdhomerun',
            newPrice: '£132.00',
            prevPrice: '£132.00',
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/3-330x330.jpg',
            image2: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/14-1-330x330.jpg'


        },
        {
            name: 'silicondust hdhomerun',
            newPrice: '£132.00',
            prevPrice: '£132.00',
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/3-330x330.jpg',
            image2: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/16-330x330.jpg'


        },
        {
            name: 'silicondust hdhomerun',
            newPrice: '£132.00',
            prevPrice: '£132.00',
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/3-330x330.jpg',
            image2: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/14-1-330x330.jpg'


        },
        {
            name: 'silicondust hdhomerun',
            newPrice: '£132.00',
            prevPrice: '£132.00',
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/3-330x330.jpg',
            image2: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/16-330x330.jpg'


        },
        {
            name: 'silicondust hdhomerun',
            newPrice: '£132.00',
            prevPrice: '£132.00',
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/3-330x330.jpg',
            image2: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/16-330x330.jpg'


        },
    ]
    return (
        <div className="grid">

            <div className="bestSell">
                <Separator></Separator>
                <div style={{
                    textAlign: 'center',
                    color: 'rgb(59, 59, 59)', 
                    fontSize: 40,
                    fontWeight: '700' ,
                    margin: 'auto',
                    paddingBottom: '36px'
                }}
                >BEST SELLERS</div>
                <div className="sellersHeader">
                    {buttons.map(button => (
                        <button key={button}
                            type="button"
                            className='btn btn-light btnSell'
                        >{button.toUpperCase()}</button>
                    ))}
                </div>
                <div className="grid wide">

                    <div className="productList">
                        <div className="productRow">


                            <div className="productWrap">
                                <div className="col l-2 m-3 c-3">

                                    <div className="productItem">
                                        <div className="productImage">

                                            <img className="productImage1" src={productSpecial.image}/>
                                            <img className="productImage2" src={productSpecial.image2}/>
                                            
                                        </div>
                                        <div className="productItemPrice">
                                            <div className="productItemName">
                                                <h2>
                                                    {productSpecial.name.toUpperCase()}
                                                </h2>
                                            </div>
                                            <div className="price">

                                                <span className="newPriceSpecial">
                                                    <h3>
                                                        {productSpecial.newPrice}
                                                    </h3>
                                                </span>
                                                <h1>-</h1>
                                                <span className="prevPriceSpecial">
                                                    <h3>
                                                        {productSpecial.prevPrice}

                                                    </h3>
                                                </span>
                                            </div>
                                            <div className="productStart productStartSpecial">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>

                                            </div>
                                        </div>
                                        <div className="actionCLi">
                                            <span className="actionCLiBtn wishlist">
                                                <span className="actionCLiBtnBg"></span>
                                                <span className="">
                                                    <i className="far fa-heart"></i>
                                                    Wishlist
                                                </span>
                                            </span>
                                            <span className="actionCLiBtn compare">
                                                <span className="actionCLiBtnBg"></span>
                                                <span className="">
                                                    <i className="far fa-clone"></i>
                                                    Compare
                                                </span>
                                            </span>
                                            <span className="actionCLiBtn selectOption">
                                                <span className="selectOptionBg"></span>
                                                <span className="">
                                                    <i className="fas fa-shopping-basket"></i>
                                                    Select Option
                                                </span>

                                            </span>
                                        </div>

                                    </div>
                                </div>
                                {products1.map((product, imdex) => (
                                    <div className="col l-2 m-3 c-3"
                                        key={imdex}
                                    >

                                        <div className="productItem">
                                                <div className="productImage">

                                                    <img className="productImage1" src={product.image}/>
                                                    <img className="productImage2" src={product.image2}/>

                                                </div>
                                                <div className="productItemPrice">
                                                    <div className="productItemName">
                                                        <h2>
                                                            {product.name.toUpperCase()}
                                                        </h2>
                                                    </div>
                                                    <div className="price">
                                                        <span className="newPrice">
                                                            <h3>
                                                                {product.newPrice}  
                                                            </h3>
                                                        </span>
                                                        <h1></h1>
                                                        <span className="prevPrice">
                                                            <h4>
                                                                {product.prevPrice}
                                                            </h4>
                                                        </span>
                                                    </div>
                                                    <div className="productStart">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>

                                                    </div>
                                                </div>
                                                <div className="actionCLi">
                                                    <span className="actionCLiBtn wishlist">
                                                        <span className="actionCLiBtnBg"></span>
                                                        <span className="">
                                                            <i className="far fa-heart"></i>
                                                            Wishlist
                                                        </span>
                                                    </span>
                                                    <span className="actionCLiBtn compare">
                                                        <span className="actionCLiBtnBg"></span>
                                                        <span className="">
                                                            <i className="far fa-clone"></i>
                                                            Compare
                                                        </span>
                                                    </span>
                                                    <span className="actionCLiBtn selectOption">
                                                        <span className="selectOptionBg"></span>
                                                        <span className="">
                                                            <i className="fas fa-shopping-basket"></i>
                                                            Add to cart
                                                        </span>

                                                    </span>
                                                </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className="productWrap">
                                
                                {products2.map((product, imdex) => (
                                    <div className="col l-2 m-3 c-3"
                                        key={imdex}
                                    >
                                        <div className="productItem">
                                                <div className="productImage">

                                                    <img className="productImage1" src={product.image}/>
                                                    <img className="productImage2" src={product.image2}/>

                                                </div>
                                                <div className="productItemPrice">
                                                    <div className="productItemName">
                                                        <h2>
                                                            {product.name.toUpperCase()}
                                                        </h2>
                                                    </div>
                                                    <div className="price">
                                                    
                                                        <span className="newPrice">
                                                            <h3>
                                                                {product.newPrice}  
                                                            </h3>
                                                        </span>
                                                        <h1></h1>
                                                        <span className="prevPrice">
                                                            <h4>
                                                                {product.prevPrice}
                                                            </h4>
                                                        </span>
                                                    </div>
                                                    <div className="productStart">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>

                                                    </div>
                                                </div>
                                                <div className="actionCLi">
                                                    <span className="actionCLiBtn wishlist">
                                                        <span className="actionCLiBtnBg"></span>
                                                        <span className="">
                                                            <i className="far fa-heart"></i>
                                                            Wishlist
                                                        </span>
                                                    </span>
                                                    <span className="actionCLiBtn compare">
                                                        <span className="actionCLiBtnBg"></span>
                                                        <span className="">
                                                            <i className="far fa-clone"></i>
                                                            Compare
                                                        </span>
                                                    </span>
                                                    <span className="actionCLiBtn selectOption">
                                                        <span className="selectOptionBg"></span>
                                                        <span className="">
                                                            <i className="fas fa-shopping-basket"></i>
                                                            Add to cart
                                                        </span>
                                                    </span>
                                                </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <ProductPage pageLength={products1.length%3 + 1}></ProductPage>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default BestSellers;