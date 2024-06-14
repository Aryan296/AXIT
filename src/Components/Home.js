import Contact from "./Contact";
import Features from "./Features";
import Review from "./Review";
import About from "./about";
import Pricing from "./pricing";
import Last from "./last";
import Front from "./front";

export default function Home(){
    return(
        <div className="container-fluid">
            <Front />
            <Features />
            <About />
            <Pricing />
            <Review />
            <Contact />
            <Last />
        </div>
    )
}

