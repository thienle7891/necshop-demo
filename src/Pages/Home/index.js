import ContainerHome from './ComponentsHome/ContainerHome';
import Header from './ComponentsHome/Header';
import './styles.css';
const Home = () => {

    return (
        <div className="grid"
            styles={{
                padding: 0,
                
            }}
        >
            <Header></Header>
            <ContainerHome></ContainerHome>
        </div>
    )
};

export default Home;