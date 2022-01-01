
import './style.css'
function FooterEnd() {
    const handleUpTop = () => {
        const top = document.querySelector(".productPage");
       
        document.body.scrollIntoView({behavior: "smooth"})
    }
    return (
        <div className="grid wide row">
            <div className="upBtn">
                <img src="https://necshop.7uptheme.net/wp-content/themes/necshop/assets/css/images/home1/backtop.png" 
                    onClick={handleUpTop}
                />
            </div>
        </div>
    )
}

export default FooterEnd;