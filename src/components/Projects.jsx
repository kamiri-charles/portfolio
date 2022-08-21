import { faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft,  faGamepad, faInfinity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Projects.scss';
import { useEffect } from 'react';
import load_projects from '../assets/scripts/projects';




const Projects = () => {


    /* Open and close projects menu function for smaller devices */
    const projects_nav_control = () => {
        const projects_nav = document.getElementById('projects-nav');


        !projects_nav.classList.contains('inactive') ? projects_nav.classList.add('inactive') : projects_nav.classList.remove('inactive');

        
    }

    useEffect(() => {
        const works_container = document.getElementById('works-container');
        const projects_arr = [
            {
                'name': 'react',
                'el': document.getElementById('1'),
                'total_projects': 10
            },
            {
                'name': 'python',
                'el': document.getElementById('2'),
                'total_projects': 1
            },
            {
                'name': 'game-dev',
                'el': document.getElementById('3'),
                'total_projects': 1
            },
            {
                'name': 'misc',
                'el': document.getElementById('4'),
                'total_projects': 1
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

            <div className="projects-nav-control-btn" id='projects-nav-control-btn' onClick={ projects_nav_control }>
                <FontAwesomeIcon icon={ faAngleLeft } />
            </div>

            <div className="projects-nav" id='projects-nav'>


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


            <div className="works" id='works'>
                <div className="works-container" id='works-container'>

                </div>
            </div>
        </div>
    )
}

export default Projects;