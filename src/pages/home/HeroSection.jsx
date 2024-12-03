export default function HeroSection(){
    return(
        <section id="heroSection" className="hero--section">
            <div classNmae="hero--Section--content--box">
                <div className="hero--section-content">
                    <h1 className="section--title">Hey, I'm Deepansh</h1>
                    <h1 className="hero--section--title">
                        <spam className="hero--section-title--color">Front End Developer</spam> {" "}
                        <br />
                    </h1>
                    <br />
                    <p className="hero--section-description">
                    Creative and detail-oriented Front-End Developer with expertise in building responsive, user-friendly web interfaces using modern technologies like HTML, CSS, JavaScript, and React.
                    </p>
                    <br />
                </div>
                <a href="https://drive.google.com/file/d/10e-QIZAjNjPQ6TLAxVhfRNcSwVEHBiGF/view?usp=sharing" className="btn btn-primary" target="_blank">Resume</a>
            </div>
            <div className="hero--section--img">
                <img src="./img/img1.png" alt="Hero Section" />
            </div>
        </section>
    )
    ;
}