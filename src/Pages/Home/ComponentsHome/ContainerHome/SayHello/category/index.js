
import './style.css'
import './responsive.css'

const Category = () => {

    const categorys = [
        {
            name: 'accessories', 
            count: 10, 
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/say1.png',
            // width: '42px',
            // height: '50px',
        },
        {
            name: 'audio', 
            count: 10, 
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/say2.png',
            // width: '35px',
            // height: '48px',
        },
        {
            name: 'carze a8', 
            count: 10, 
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/say3.png',
            // width: '44px',
            // height: '45px',
        },
        {
            name: 'micro phone', 
            count: 10, 
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/say7.png',
            // width: '42px',
            // height: '50px',
        },

        {
            name: 'special edition', 
            count: 10, 
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/say8.png',
            // width: '79px',
            // height: '30px',
        },
        {
            name: 'usb wifile', 
            count: 10, 
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/say9.png',
            // width: '53px',
            // height: '38px',

        },
    ]

    return (
        <div className='categoryList grid wide'>
                <div className='row' style={{
                    width: '100%',
                    marginBottom: '10px'
            
                }}>
                    {categorys.map((category, index) => (
                        <div 
                            key={index}
                            className='categoryItem col l-4 m-4 c-4'>
                            <div 
                                
                                className='item' 
                                    style={{padding: 0}}
                                >
                                <div className={`category${index}`}
                                    style={{display: 'flex',
                                }}
                                >
                                    <div className='image'>
                                        <img 
                                            width={category.width} 
                                            height={category.height} 
                                            src={category.image}/>
                                    </div>
                                    <div className='contents'>
                                        <h3>{category.name.toUpperCase()}</h3>
                                        <p>{category.count} items</p>
                                    </div>
                                    <div className={`borderCategory borderCategory${index}`}></div>
                                    <div className={`borderImage borderImage${index}`}></div>
                                </div>

                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>

    )
};

export default Category;