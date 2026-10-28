import AboutUs from "../components/Home/AboutUs";
import Capabilities from "../components/Home/Capabilities";
import ContactUs from "../components/Home/ContactUs";
import Game from "../components/Home/Game";
import Hero from "../components/Home/Hero";
import Specialization from "../components/Home/Specialization";

export default function Home() {
    return (
        <div className="flex flex-col mx-4 gap-4 md:mx-20 md:gap-24">
            <Hero />
            <Game />
            <Specialization />
            <Capabilities />
            <AboutUs />
            <ContactUs />
        </div>
    )
}