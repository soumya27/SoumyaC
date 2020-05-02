import React from "react";

function Navbar(){
    const navbaritems = ["About Me", "Experience", "Projects","Contact me"];
    const name = "Soumya Cherukupalli";
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <span className="my_name">{name}</span>
            <div className="navbar-collapse collapse m-4">
                <ul className="navbar-nav col-md-4 ml-auto" >
                    {/*{navbaritems.map(items =>(*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <a className="nav-link" href="#">{items}</a>*/}
                    {/*    </li>*/}
                    {/*))}*/}
                    <li className="nav-item active">
                        <a className="nav-link" href="#aboutme">About Me <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">Experience </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#project">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contactme">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
