import SayHello from "./SayHello";
import SlideSale from "./slideSale";
import Special from "./Special";
import BestSellers from "./BestSellers";
import Brand from "./Brand";
import Deals from "./Deals";
import OurStaff from "./OurStaff";
import LatestNew from "./LatestNew";
import Last from "./Last";


const ContainerHome = () => {
    
    return (
        <div className="grid"
            style={{padding : 0}}
        >
            <SlideSale></SlideSale>
            <Special></Special>
            <SayHello></SayHello>
            <BestSellers></BestSellers>
            <Brand></Brand>
            <Deals></Deals>
            <OurStaff></OurStaff>
            <LatestNew></LatestNew>
            <Last></Last>
        </div>
    )
};

export default ContainerHome;