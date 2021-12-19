import Separator from "../separator";
import './style.css';
import './responsive.css'

function LatestNew() {

    const latestList = [
        
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/blog111-380x322.jpg',
            title: 'LOREM KHALED IPSUM US A MAJOR',
             
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/blog061-680x322.jpg',
            title: 'LOREM KHALED IPSUM US A MAJOR',
             
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/blog051-380x322.jpg',
            title: 'LOREM KHALED IPSUM US A MAJOR',
             
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/blog011-380x322.jpg',
            title: 'LOREM KHALED IPSUM US A MAJOR',
             
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/blog031-380x322.jpg',
            title: 'LOREM KHALED IPSUM US A MAJOR',
             
        },
        {
            image: 'https://necshop.7uptheme.net/wp-content/uploads/2016/05/blog131-680x322.jpg',
            title: 'LOREM KHALED IPSUM US A MAJOR',
             
        },
    ]

    return (
        <div className="grid">
            <div className="latestNew">
                <Separator></Separator>
                <h2>LATEST NEW</h2>
                <div className="latestNewList">
                    <div className="latestNewItem latestNewItem0 col l-3 m-0 c-0">
                        <div className="latestNewBorder"></div>

                        <span className="latestImage latestImage0">
                            <img src="https://necshop.7uptheme.net/wp-content/uploads/2016/05/blog121-480x644.jpg"/>
                        </span>
                        <span className="latestNewBlock">
                            <span className="latestNewContent">
                                <h2>LOREM KHALED IPSUM US A MAJOR</h2>
                                <div>
                                    <div>
                                        <span>
                                            <i class="far fa-calendar-alt"></i>
                                            <h4>MAY 20</h4>
                                        </span>
                                        <span>
                                            <i class="far fa-comment"></i>
                                            <h4>0</h4>
                                        </span>
                                    </div>
                                </div>
                                <div>

                                    <button>MORE</button>
                                </div>
                            </span>
                        </span>
                    </div>
                    
                    <div className="col l-9 m-12 c-12">
                        <div className="row" style={{width: '100%'}}>
                            {latestList.map((latestItem, index)=> (

                                <div className={`latestNewItem latestNewItem${index + 1}`} key={index}>
                                    <div className="latestNewBorder"></div>

                                    <span className={`latestImage latestImage${index+1}`}>
                                        <img src={latestItem.image}/>
                                    </span>
                                    <span className="latestNewBlock">
                                        <span className="latestNewContent">
                                            <h2>{latestItem.title}</h2>
                                            <div>
                                                <div>
                                                    <span>
                                                        <i class="far fa-calendar-alt"></i>
                                                        <h4>MAY 20</h4>
                                                    </span>
                                                    <span>
                                                        <i class="far fa-comment"></i>
                                                        <h4>0</h4>
                                                    </span>
                                                </div>
                                            </div>
                                        </span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNew;
