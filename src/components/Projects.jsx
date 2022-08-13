import { faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faInfinity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Projects.scss';
import { useEffect } from 'react';
import load_projects from '../assets/scripts/projects';




const Projects = () => {

    useEffect(() => {
        const works = document.getElementById('works');
        const projects_arr = [
            {
                'name': 'react',
                'el': document.getElementById('1'),
                'total_projects': 4
            },
            {
                'name': 'python',
                'el': document.getElementById('2'),
                'total_projects': 2
            },
            {
                'name': 'game-dev',
                'el': document.getElementById('3'),
                'total_projects': 1
            },
            {
                'name': 'misc',
                'el': document.getElementById('4'),
                'total_projects': 2
            }
        ];
        load_projects(works, projects_arr[0].total_projects);

        projects_arr.forEach(obj => {
            obj.el.addEventListener('click', () => {
                for (let i = 0; i < projects_arr.length; i++) {
                    projects_arr[i].el.classList.remove('active');
                }
                obj.el.classList.add('active');
                load_projects(works, obj.total_projects);
            });
        })
    });


    return (
        <div id="projects">
            <div className="projects-nav">

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
            </div>
        </div>
    )
}

export default Projects;