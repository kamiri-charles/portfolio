import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import '../styles/Thanks.scss'

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
                <a href="https://portfolio.kamiri.live">
                    <FontAwesomeIcon icon={ faHouse } />
                </a>
            </div>
        </div>
    )
}

export default Thanks;