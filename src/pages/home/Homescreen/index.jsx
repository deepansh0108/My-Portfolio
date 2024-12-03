import AboutMe from "../AbotMe";
import Certifications from "../Certifications";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home(){
    return(
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <Certifications />
            <ContactMe />
            <Footer />
        </>
    )
}