import React from "react";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin , faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contactme(){
    const links = ["mailto:soumya751@gmail.com","https://www.linkedin.com/in/soumya-cherukupalli/","https://github.com/soumya27"];
    return(
        <div className="contactme container-fluid" id="contactme">
            <div className="hello">
                <span>Say hello! </span>
            </div>
            <div className="icons">
                <a href={links[0]}><FontAwesomeIcon className="m-3" icon={faEnvelope} size="3x"/></a>
                <a href={links[1]}><FontAwesomeIcon className="m-3" icon={faLinkedin} size="3x" /></a>
                <a href={links[2]}><FontAwesomeIcon className="m-3" icon={faGithub} size="3x"/></a>
            </div>
        </div>
    );
}

export default Contactme;
