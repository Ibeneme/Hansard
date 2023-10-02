import Indexa from "../Ikenna/pages";
import Blog from "../components/Blog";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Programs from "../components/Programs";
import Stats from "../components/Stats";
import Welcome from "../components/Welcome";
import HomeHeader from "../components/headers/Home";

const Home = () => {
    return (
        <>
        <Navbar />
        <HomeHeader />
        <Indexa />
        {/* <Programs /> */}
        <Stats />
        <Welcome />
        <Blog />
        <Newsletter />
        <Footer />
        </>
    )
};

export default Home;