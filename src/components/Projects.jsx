import React from "react";
import vineyard from '../images/vineyard.png';
import mean from '../images/mean.png';
import unity from '../images/unity.jpg';
import java from '../images/java.png';

function Projects() {
    return(
        <React.Fragment >
            <h2 className="projectheader"> Personal and Academic Projects</h2>
            <div className=" projectcontainer container-fluid" id="project">
                <div className="projects card">
                    <img className="card-img-top" src={vineyard} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Vineyard</h5>
                            <p className=" description card-text">
                                TechTogether2020 (Won the challenge - Best Use of AWS):
                                Building an <strong>AWS serverless web application </strong>
                                using AWS Lambda, S3, API Gateway, and DynamoDB. The web application
                                provides users to search for their favorite vines using various tags
                                or descriptions. Appropriate tags are generated from the video by using
                                the <strong> AWS Rekognition </strong> service and descriptions by using
                                the <strong> AWS Transcribe service.</strong> Using technologies like
                                <strong>JavaScript and Python </strong>.
                            </p>
                        </div>
                    <a href="https://github.com/soumya27/TechTogether" className="card-footer text-muted">Github</a>
                </div>
                <div className="projects card">
                    <img className="card-img-top" src={mean} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Recipe App</h5>
                        <p className=" description card-text">
                            Developed a web application to create and discover everyday cooking inspiration.
                            Collaborated with 3 people on a team project.I worked on both client and server-side
                            software. <strong>Angular 8</strong> and <strong>TypeScript </strong> was used for the
                            frontend development and <strong>Nodejs</strong> for the backend. Created <strong>REST API’s</strong>
                            to store and retrieve the data from <strong>MongoDB</strong>.
                        </p>
                    </div>
                    <a href="https://github.com/neu-mis-info6150-fall-2019/final-project-team-node" className="card-footer text-muted">Github</a>
                </div>
                <div className="projects card">
                    <img className="card-img-top" src="https://raw.githubusercontent.com/soumya27/CellularAutomata/master/out/Image3.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Cellular Automata - Crystal growth (Java)</h5>
                        <p className="description card-text">
                            Build a 2D Cellular Automata Crystal growth in <strong>Java </strong>. The program uses
                            a UI to input the Rule selection, lifetime of cellular automata and a graphical display
                            panel to display the automation. Using <strong>java threads </strong>, we achieve parallel
                            processing for the simulation and UI components. The implementation also includes the use
                            of abstract class, interfaces and singleton <strong>design pattern</strong>.
                        </p>
                    </div>
                    <a href="https://github.com/soumya27/Web_Recipe/tree/master/final-project-team-node" className="card-footer text-muted">Github</a>
                </div>
                <div className="projects card">
                    <img className="card-img-top" src={unity} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Games in UNITY </h5>
                        <p className=" description card-text">
                            Structured a 4-Level unity 2D platformer game using <strong>C#</strong>  and inbuilt
                            <strong>Unity Environment</strong> as Final project. Devised scripts for movement,
                            collisions, enemy player, obstacles, triggers, lighting, score count, timer, health and
                            audio functionality. Designed Shaders and particle effects for games. Used 2d sprites to
                            create animation.
                        </p>
                    </div>
                    <a href="https://github.com/soumya27/GameDesign" className="card-footer text-muted">Github</a>
                </div>
                <div className="projects card">
                    <img className="card-img-top" src={java} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Ranking System</h5>
                        <p className=" description card-text">
                            This <strong>Java</strong> project is a ranking system capable of predicting league standings for the English
                            Premier League based on past match outcomes. Using Poisson distribution to simulate the possible
                            outcome of one match. To make this prediction more accurate, we also consider the home team advantage.
                        </p>
                    </div>
                    <a href="https://github.com/soumya27/RankingSystem" className="card-footer text-muted">Github</a>
                </div>
            {/*    <div className="projects card">*/}
            {/*        <img className="card-img-top" src="https://raw.githubusercontent.com/soumya27/CellularAutomata/master/out/Image3.png" alt="Card image cap" />*/}
            {/*        <div className="card-body">*/}
            {/*            <h5 className="card-title">Cricket Score Keeper </h5>*/}
            {/*            <p className="description card-text">*/}
            {/*                ReactJS*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <a href="https://github.com/soumya27/Web_Recipe/tree/master/final-project-team-node" className="card-footer text-muted">Github</a>*/}
            {/*    </div>*/}
            </div>


            {/*<div className="container-fluid d-inline-flex p-2" id="project">*/}

            {/*</div>*/}
        </React.Fragment>
    );
}

export default Projects;
