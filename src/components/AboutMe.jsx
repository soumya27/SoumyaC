import React from "react";
import avatar from '../images/myAvatar.svg';
import Skills from "./Skills";

function Aboutme() {
    return (
        <React.Fragment>
            <div className="aboutme container p-3" id="aboutme">
                <section className="p-5">
                    <h1>Hi, I'm Soumya.Nice to meet you.</h1>
                    <p>
                        Current graduate student of Northeastern University
                    </p>
                    <p>
                        It has been about 10 years since I started my journey into the world of computers and programming.
                        Now years later, with 360-degree exposure to software development and problem-solving,
                        I strive to persistently learn and solve problems innovatively.
                    </p>
                </section>
                <img className="avatar rounded-circle " src={avatar} alt="my avatar" />
            </div>
            <Skills />
        </React.Fragment>
    );
}

export default Aboutme;
