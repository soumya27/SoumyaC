import React from "react";

function Skills(){
    return (
        <div className="container-fluid p-lg-5">
            <h2>Languages I Speak </h2>
            <div className="skillrow ">
                <div className="col-sm">
                    <h2>Frontend:</h2>
                    <ul className="listitems">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>AngularJS</li>
                        <li>ReactJS</li>
                        <li>Sass</li>
                    </ul>
                </div>
                <div className="col-sm">
                    <h2>Backend:</h2>
                    <ul className="listitems">
                        <li>Java</li>
                        <li>Node.js</li>
                        <li>Python</li>
                    </ul>
                    <h2>Database:</h2>
                    <ul className="listitems">
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div className="col-sm">
                    <h2>Tools and platforms:</h2>
                    <ul className="listitems">
                        <li>Selenium</li>
                        <li>TestNG</li>
                        <li>Jasmine</li>
                        <li>Git</li>
                        <li>Jenkins</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
