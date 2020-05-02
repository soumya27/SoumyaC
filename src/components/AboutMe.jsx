import React from "react";
import avatar from '../myAvatar.svg';
import Skills from "./Skills";

function Aboutme() {
    return (
        <React.Fragment>
            <div className="aboutme container p-3" id="aboutme">
                <section className="p-5">
                    <h1>Hi, I'm Soumya.Nice to meet you.</h1>
                    <p>
                        Since beginning my journey as software developer around 6 years back,
                        I've worked as Software Developer,then Software Development Engineering in Test,
                        and collaborated with talented people to create digital products for both business and consumer
                        use. I'm quietly confident, naturally curious, and perpetually working on improving
                        my chops one design problem at a time.
                    </p>
                </section>
                <img className="avatar rounded-circle " src={avatar} alt="my avatar" />
            </div>
            <Skills />
        </React.Fragment>
    );
}

export default Aboutme;
