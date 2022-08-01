import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.scss';

const Contact = () => {

    useEffect(() => {
        const input_1 = document.getElementById('input-1');
        const input_2 = document.getElementById('input-2');

        input_1.addEventListener('focusout', () => {
            input_1.value !== '' ? input_1.classList.add('active') : input_1.classList.remove('active'); 
        })

        input_2.addEventListener('focusout', () => {
            input_2.value !== '' ? input_2.classList.add('active') : input_1.classList.remove('active'); 
        })
    });


    return (
        <div id="contact">
            <div className="sub-title">Get in touch</div>
            <div className="left">
                <form action="">
                    <div className="sub-sub-title">Send me an email.</div>
                    <label>
                        Subject
                        <input type="text" id='input-1' required />
                    </label>

                    <label>
                        Email
                        <input type="text" id='input-2' required />
                    </label>

                    <div className="to">
                        <span>To: </span>
                        charleskamiri6@gmail.com
                        </div>
                    <textarea placeholder='Message'></textarea>
                    <button className='send'>Send</button>
                </form>
            </div>
            <div className="border"></div>


            <div className="right">

                {/* Github */}
                <Link to='https://github.com/kamiri-charles' className='github' target='_blank'>
                    <div className="icon">
                        <FontAwesomeIcon icon={ faGithub } />
                    </div>
                    <div className="link-text">Contribute to some of my projects on GitHub</div>
                </Link>

                {/* Linkedin */}
                <Link to='https://linkedin.com/charles-kamiri' className='linkedin' target='_blank'>
                    <div className="icon">
                        <FontAwesomeIcon icon={ faLinkedin } />
                    </div>
                    <div className="link-text">I'm also available on LinkedIn!</div>
                </Link>

                {/* Whatsapp */}
                <Link to='https://linkedin.com/charles-kamiri' className='whatsapp' target='_blank'>
                    <div className="icon">
                        <FontAwesomeIcon icon={ faWhatsapp } />
                    </div>
                    <div className="link-text">+254 797-317-704 <br />Send a quick text, maybe even a call... and let's connect</div>
                </Link>

                {/* Instagram */}
                {/* <Link to='https://instagram.com/kamiri.charles'>
                    <div className="icon">
                        <FontAwesomeIcon icon={ faInstagram } />
                    </div>
                    <div className="link-text">@kamiri.charles <br />Give me a follow!</div>
                </Link> */}
            </div>
        </div>
    )
}

export default Contact;