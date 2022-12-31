import { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faInfinity, faGamepad } from '@fortawesome/free-solid-svg-icons'
import Loader from './Loader'
import '../styles/Projects.scss'
import Project from './Project'


const Projects = () => {
    let [projects, setProjects] = useState();
    let [active, setActive] = useState('react');
    let projects_nav_btn = useRef();

    useEffect(() => {
        setProjects(null);
        setTimeout(() => {
            (async () => {
                fetch(`https://projects-api.herokuapp.com/api/projects/${active}/`)
                .then(res => res.json())
                .then(data => setProjects(data))
            }) ();
        }, 2000);

        change_active_project();
    }, [active]);

    let change_active_project = () => {
        const nav_items = document.getElementsByClassName('nav-item');

        for (let i = 0; i < nav_items.length; i++) {
            nav_items[i].addEventListener('click', () => {

                if (!(nav_items[i].classList.contains('active'))) {
                    // Remove active class from all the other nav elements
                    for (let j = 0; j < nav_items.length; j++) {
                        if (nav_items[j] !== nav_items[i] && nav_items[j].classList.contains('active')){
                            nav_items[j].classList.remove('active');
                        };
                    }

                    // Add active class to the clicked nav element
                    nav_items[i].classList.add('active');
                    setActive(nav_items[i].id);
                }
            })
        }
    }

    let toggle_projects_nav = () => {
        const projects_nav = document.getElementById('projects_nav');

        if (projects_nav.classList.contains('inactive')) {
            projects_nav.classList.remove('inactive');
            projects_nav.classList.add('active');
            projects_nav_btn.current.classList.remove('projects-active');
            projects_nav_btn.current.classList.add('projects-inactive');
        } else {
            projects_nav.classList.remove('active');
            projects_nav.classList.add('inactive');
            projects_nav_btn.current.classList.remove('projects-inactive');
            projects_nav_btn.current.classList.add('projects-active');
        }
    }

    return (
        <div id="projects">
            <div ref={projects_nav_btn} className="projects-nav-control-btn projects-active" onClick={toggle_projects_nav}>
                <FontAwesomeIcon icon={ faAngleRight } />
            </div>

            <div className="projects-nav inactive" id='projects_nav'>

                {/* ReactJs */}
                <div className="nav-item active" id='react'>
                    <FontAwesomeIcon icon={ faReact } />
                    <div className="desc">ReactJs</div>
                </div>

                {/* Python */}
                <div className="nav-item" id='django'>
                    <FontAwesomeIcon icon={ faPython } />
                    <div className="desc">Django</div>
                </div>

                {/* Game Dev */}
                <div className="nav-item" id='game-dev'>
                    <FontAwesomeIcon icon={ faGamepad } />
                    <div className="desc">Game Dev.</div>
                </div>

                {/* Misc */}
                <div className="nav-item" id='others'>
                    <FontAwesomeIcon icon={ faInfinity } />
                    <div className="desc">Others</div>
                </div>
            </div>


            <div className="works projects-nav-inactive">
                <div className="works-container">
                    {!projects ? (
                        <Loader />
                    ) : (
                        <>
                            {projects.map(project => (
                                <Project
                                    title={project.title}
                                    image={project.image}
                                    desc={project.description}
                                    link={project.url}
                                    key={project.id}
                                    />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects;
