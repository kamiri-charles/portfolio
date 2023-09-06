import { useEffect, useState } from 'react';
import Project from './Project';
import Loader from './Loader';
import '../styles/Projects.scss';


const Projects = () => {
    let [projects, setProjects] = useState();

    useEffect(() => {
        fetch('https://kamiri-portfolio.azurewebsites.net/api/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div className="projects" id='projects'>
            {projects ? projects.map(project => <Project key={project.id} {...project} />) : <Loader />}
        </div>
    )
}

export default Projects;