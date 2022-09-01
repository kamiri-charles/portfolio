import '../styles/Thanks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Thanks = () => {
    return (
        <div id="thanks">
            <div className="message">
                Email sent successfully.
                Thanks for visiting my portfolio page.
                <br />
                <br />
                <br />
                <br />
                <a href="kamiri-charles.github.io/portfolio/">
                    <FontAwesomeIcon icon={ faHouse } />
                </a>
            </div>
        </div>
    )
}

export default Thanks;