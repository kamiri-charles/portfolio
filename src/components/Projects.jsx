/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft,  faAngleRight,  faGamepad, faInfinity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Projects.scss';
import { useEffect } from 'react';
import load_projects from '../assets/scripts/projects';




const Projects = () => {
    /* Open and close projects menu function for smaller devices */
    const projects_nav_control = () => {
        let nav_control_btn = document.getElementById('nav_control_btn');
        // Menu
        !projects_nav.classList.contains('inactive') ? projects_nav.classList.add('inactive') : projects_nav.classList.remove('inactive');
        !projects_nav.classList.contains('inactive') ? works.classList.remove('projects-nav-inactive') : works.classList.add('projects-nav-inactive'); 
        
        // Button 
        !projects_nav.classList.contains('inactive') ? nav_control_btn.classList.remove('projects-active') : nav_control_btn.classList.add('projects-active');
    }

    useEffect(() => {
        const projects_arr = [
            {
                'name': 'react',
                'el': document.getElementById('1'),
                'total_projects': 6
            },
            {
                'name': 'django',
                'el': document.getElementById('2'),
                'total_projects': 4
            },
            {
                'name': 'game-dev',
                'el': document.getElementById('3'),
                'total_projects': 5
            },
            {
                'name': 'misc',
                'el': document.getElementById('4'),
                'total_projects': 3
            }
        ];
        load_projects(works_container, projects_arr[0].total_projects);

        projects_arr.forEach(obj => {
            obj.el.addEventListener('click', () => {
                window.innerWidth <= 753 ? projects_nav_control() : console.log('on a laptop');
                for (let i = 0; i < projects_arr.length; i++) {
                    projects_arr[i].el.classList.remove('active');
                }
                obj.el.classList.add('active');
                load_projects(works_container, obj.total_projects);
            });
        })
    });


    return (
        <div id="projects">
            <div className="projects-nav-control-btn projects-active" id='nav_control_btn' onClick={ projects_nav_control }>
                <FontAwesomeIcon icon={ faAngleRight } />
            </div>

            <div className="projects-nav inactive" id='projects_nav'>

                {/* ReactJs */}
                <div className="nav-item active" id='1'>
                    <FontAwesomeIcon icon={ faReact } />
                    <div className="desc">ReactJs</div>
                </div>

                {/* Python */}
                <div className="nav-item" id='2'>
                    <FontAwesomeIcon icon={ faPython } />
                    <div className="desc">Django</div>
                </div>

                {/* Game Dev */}
                <div className="nav-item" id='3'>
                    <FontAwesomeIcon icon={ faGamepad } />
                    <div className="desc">Game Dev.</div>
                </div>

                {/* Misc */}
                <div className="nav-item" id='4'>
                    <FontAwesomeIcon icon={ faInfinity } />
                    <div className="desc">Others</div>
                </div>
            </div>


            <div className="works projects-nav-inactive" id='works'>
                <div className="works-container" id='works_container'>

                </div>
            </div>
        </div>
    )
}

export default Projects;