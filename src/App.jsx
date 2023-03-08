import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";
import Location from "./components/Location.jsx";
import Benefit from "./components/Benefit.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <Location />
            <Benefit />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
