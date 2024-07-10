import Hero from '../hero/Hero';
import "./Home.css";

const Home = ({images}) => {
    return(
        <Hero images={images}/>
    );
};

export default Home