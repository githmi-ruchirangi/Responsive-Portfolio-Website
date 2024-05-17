import React from "react";
import ProjectCard from "./Helper/ProjectCard";

const Project = () => {

    return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
        <div className="text-center">
        <p className="heading_mini">Recent Works</p>
        <h1 className="heading_primary">My Best <span className="text-yellow-500">Projects</span>
        </h1>
            </div>
            <ProjectCard  title="E-commerce Website" tech1="React" tech2="Next JS" tech3="Tailwind" tech4="TypeScript"
            image="/images/p1.png" />
             <ProjectCard  title="Portfolio Website" tech1="React" tech2="Next JS" tech3="Tailwind" tech4="TypeScript"
            image="/images/p2.png" />
             <ProjectCard  title="Fullstack Food Delivery Webapp" tech1="React" tech2="Next JS" tech3="Tailwind" tech4="TypeScript"
            image="/images/p3.png" />
             <ProjectCard  title="Travel Website" tech1="React" tech2="Next JS" tech3="Tailwind" tech4="TypeScript"
            image="/images/p4.png" />
        </div>
    );
};
export default Project;