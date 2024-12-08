import React from "react";
import photo from "../Images/Photo Passeport.JPG";
import Header from "../Components/Header";

const Home = () => {
    return (
        <div className="container home-container">
            {/* Header Section */}
            <Header />

            {/* Main Content Section */}
            <div className="row justify-content-center align-items-center">
                {/* Image Section */}
                <div className="col-12 col-lg-6 image-section mb-4 mb-lg-0 d-flex justify-content-center">
                    <img
                        src={photo}
                        alt="Riwa Karam"
                        className="profile-image img-fluid"
                    />
                </div>

                {/* First Paragraph */}
                <div className="col-12 col-lg-6 bio-section text-center text-lg-left">
                    <h2>Bio</h2>
                    <p>
                        I am a second-year Ph.D. student in the Electrical
                        Engineering and Computer Science (EECS) Department at
                        the{" "}
                        <a
                            href="https://uci.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="school-link"
                        >
                            University of California, Irvine (UCI)
                        </a>
                        , affiliated with the{" "}
                        <a
                            href="https://faculty.sites.uci.edu/robotecology/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lab-link"
                        >
                            Robot Ecology Lab
                        </a>{" "}
                        under the guidance of Professor Magnus Egerstedt. My
                        research interests span a range of topics in robotics
                        and control, including multi-agent systems, formation
                        control, coverage control, optimization, networked
                        control, applied computer vision, and machine learning.
                    </p>
                </div>
            </div>

            {/* Remaining Paragraphs */}
            <div className="row">
                <div className="col-12 bio-section text-center">
                    <h2>Get to know me more!</h2>
                    <p>
                        I earned my Bachelor of Science in Computer Engineering
                        from the{" "}
                        <a
                            href="https://www.balamand.edu.lb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="school-link"
                        >
                            University of Balamand
                        </a>
                        , graduating as valedictorian of my class. During my
                        undergraduate years, I actively participated in IEEE
                        activities, technical competitions, and academic
                        projects that honed my problem-solving and technical
                        skills. These experiences reinforced my commitment to
                        pursuing advanced research in engineering and robotics.
                    </p>
                    <p>
                        In addition to my academic background, I have practical
                        industry experience in software and systems engineering.
                        I worked part-time, remotely as a software engineer at{" "}
                        <a
                            href="https://www.aviaproconsulting.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="company-link"
                        >
                            AviaPro Consulting Inc.
                        </a>{" "}
                        I also interned as a Mechatronics and Control Systems
                        Engineer at{" "}
                        <a
                            href="https://www.asml.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="company-link"
                        >
                            ASML
                        </a>
                        , focusing on high-precision systems, where I gained
                        expertise in modeling, control design, and force
                        estimation using techniques such as Gaussian Process
                        Regression. I also tutored back in my undergrad years.
                    </p>
                    <p>
                        Outside of my academic and professional endeavors, I am
                        passionate about extracurricular activities that promote
                        physical and mental well-being. I am an avid volleyball
                        player and swimmer and enjoy spending time outdoors.
                        Additionally, I have a deep appreciation for movies, TV
                        shows, and reading, which provide both relaxation and
                        inspiration and initially sparked my interest in
                        robotics. I truly believe that the mind and its
                        imagination can be expanded outside of work and by being
                        creative. These diverse interests reflect my commitment
                        to maintaining a well-rounded and balanced approach to
                        life.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;