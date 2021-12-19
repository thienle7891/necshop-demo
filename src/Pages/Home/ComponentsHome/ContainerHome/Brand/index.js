
import './style.css'
import './responsive.css'
function Brand() {

    const imagesBrand = [
        {image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/br1-1.png'},
        {image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/br2-1.png'},
        {image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/br3-1.png'},
        {image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/br4-1.png'},
        {image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/br5-1.png'},
        {image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/br6.png'},
        {image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/br7.png'},
        {image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/br8.png'},
        {image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/br9.png'},

    ]
    return (
        <div className="grid" style={{width: '100%'}}>
                <div className="brandBg" >
                    <div className="brandShow">
                        <div className="grid wide">
                            <div className="row">
                                <div className="col l-6 m-6 c-6">
                                    <div className="brand" >
                                        <div className="brandImage">
                                            <img src="https://necshop.7uptheme.net/wp-content/uploads/2016/05/men.png"/>
                                        </div>
                                            
                                    </div>

                                </div>
                                <div className="col l-1 m-1 c-1 colFake"></div>
                                <div className="col l-1 m-1 c-1"></div>

                                <div className="col l-4 m-4 c-4" style={{position: "relative"}}>
                                    <div className="row" style={{
                                        display: 'flex',
                                        position: "relative",
                                        top: '50%',
                                        transform: "translateY(-50%)",
                                    }}>
                                        <div className="brandContentTitle">
                                            <h2>BRAND'S SHOW</h2>
                                        </div>
                                        <div className="brandContent">
                                            <div className="row">
                                                {imagesBrand.map((image, index) => (
                                                    <div className="col l-4 m-4 c-4" key={index} style={{padding: 0}}>
                                                        <div className={`imageBrand imageBrand${index}`}>
                                                            <img className="imageBrandImage" src={image.image}/>
                                                        </div>
                                                        
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default Brand;
