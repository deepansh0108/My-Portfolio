
export default function AboutMe(){
    return(
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/deep1.JPG" alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box" >
                <div className="hero--section--content">
                    <h1 className="skills--section--heading">About Me</h1>
                    <p className="hero--section--description">Hello! I’m Deepansh, a passionate and dedicated Front-End Developer with a keen eye for design and a love for building interactive, user-friendly websites. With expertise in HTML, CSS, JavaScript, and React, I create seamless and responsive web applications that provide exceptional user experiences.</p>
                    <p className="hero--section--description">I believe in the power of clean, efficient code and the importance of collaboration in bringing ideas to life. My approach to development is user-centric, ensuring that every project I work on is not only functional but also intuitive and visually appealing. I’m constantly learning and exploring new technologies to stay ahead in this fast-paced industry.</p>
                    <p className="hero--section--description">When I'm not coding, you can find me exploring new design trends, working on personal projects, or honing my skills in additional areas like backend development. Let’s connect and create something amazing together!</p>

                    <div className="education-section">
                        <h2 className="education-heading">Education</h2>
                        <div className="education-details">
                            <p className="education-item">
                                <strong>10th Grade:</strong> 82.17% - De Nobili School, Chandrapura
                            </p>
                            <p className="education-item">
                                <strong>12th Grade:</strong> 85.8% - Delhi Public School, Dhanbad
                            </p>
                            <p className="education-item">
                                <strong>CGPA:</strong> 8.7 - Silicon University, Bhubaneswar
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}