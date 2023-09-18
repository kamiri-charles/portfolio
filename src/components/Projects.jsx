import { useEffect, useState } from 'react';
import data from '../assets/projects.json';
import Project from './Project';
import Loader from './Loader';
import '../styles/Projects.scss';


const Projects = () => {
    let [projects, setProjects] = useState();

    useEffect(() => {
        setTimeout(() => {
            setProjects(data);
        }, 3000);

    }, [projects]);

    return (
        <div className="projects" id='projects'>
            {projects ? projects.map((project, idx) => <Project key={idx} {...project} />) : <Loader />}
        </div>
    )
}

export default Projects;