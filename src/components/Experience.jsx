import React from "react";

function Experience() {
    return(
        <div className="exp container-fluid" id="experience">
            <h2 className="experience" >Experiences</h2>
            <div className="accordion">
                <div className="card">
                    <div className="card-title">
                        <h3 className="company mb-0">
                            <span className="cname">SYMANTEC, SOFTWARE DEVELOPER IN TESTING (Chennai, IN) </span>
                            <span className="cdate">JAN 2015 – MAY 2019 </span>
                        </h3>
                    </div>
                    <div className="collapse show" data-parent="#accordion">
                        <div className="card-body">
                            <span className='project'>Project 2: PASSWORD MANAGER EXTENSION AND MOBILE APPS  </span>
                            <ul className="projectitems listitems">
                                <li>Implemented a successful POC in API design testing. Reduced manual API testing time with better design and automated testing with <strong>Jasmine (JavaScript)</strong></li>
                                <li>Wrote automation scripts as a part of the automation re-architecture initiative aimed at improving the stability of scripts and reducing testing time, deployed to separate environments to ensure business continuity </li>
                                <li>Worked on the defect fixes and UI changes <strong> (JavaScript)</strong></li>
                                <li>Developed iOS Mobile application for Norton Password Management using <strong>Swift</strong> and <strong>Objective c</strong></li>
                                <li>Wrote test cases to enable test-driven development<strong>(Python)</strong> </li>
                                <li>Collaborated successfully with cross-functional development teams to design and release new products </li>
                            </ul>
                            <span className='project1'>Project 1: EPMP System of distributed web services </span>
                            <ul className=" projectitems listitems">
                                <li>Engaged in regular (sprint-end) demonstrations to senior management and client to avoid any gaps in expectations </li>
                                <li>Gained exposure to the <strong>Agile</strong> approach to the SDLC, and CI/CD using Jenkins </li>
                                <li>Automated test cases in increase automation coverage using <strong>TestNG (Java)</strong></li>
                                <li>Create DevOps suite in a team, to deploy the PaaS stack on OpenStack using <strong>Ansible</strong> and <strong>Puppet</strong> </li>
                                <li>Involved in failover and failure testing of cloud-deployed PaaS solution, covering multiple databases, services, and message queue </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <h3 className="company mb-0">
                            <span className="cname">INFRASOFT TECHNOLOGIES, ASS. SOFTWARE DEVELOPER (Chennai, IN)</span>
                            <span className="cdate">JUL 2014 - JAN 2015</span>
                        </h3>
                    </div>
                    <div className="collapse show" data-parent="#accordion">
                        <div className="card-body">
                            <ul className="projectitems listitems">
                                <li>Collaborated with a team to build a Payroll Software using <strong> Spring, Struts and Hibernate </strong> . Responsible for understanding the client requirements</li>
                                <li>Implementing the design, testing and integration of the product.</li>
                            </ul>
                        </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Experience;
