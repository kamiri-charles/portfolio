/* eslint-disable no-undef */
/* eslint-disable default-case */
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import '../styles/Contact.scss';

const Contact = () => {
    useEffect(() => {
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
                <form action="https://formsubmit.co/5468185aaec8dc6707c6f8bc9216c88c" method='POST'>
                    <div className="sub-sub-title">Send me an email.</div>
                    <label>
                        Subject
                        <input type="text" id='input_1' name='Subject' required />
                    </label>

                    <label>
                        Email
                        <input type="email" id='input_2' name='Email' required />
                    </label>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_next" value="https://kamiri-charles.github.io/portfolio/#/email-submission-success"></input>
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
                <a href="https://github.com/kamiri-charles" className='github' target='_blank' rel='noreferrer'>
                    <div className="icon">
                        <FontAwesomeIcon icon={ faGithub } />
                    </div>
                    <div className="link-text">Contribute to some of my projects on GitHub <br /> @kamiri-charles</div>
                </a>

                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/charles-kamiri-5012a9209/" className='linkedin' target='_blank' rel='noreferrer'>
                    <div className="icon">
                        <FontAwesomeIcon icon={ faLinkedin } />
                    </div>
                    <div className="link-text">I'm also available on LinkedIn! <br /> @Charles-Kamiri</div>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/kamiri.charles" className='instagram' target='_blank' rel='noreferrer'>
                    <div className="icon">
                        <FontAwesomeIcon icon={ faInstagram } />
                    </div>
                    <div className="link-text">Instagram <br /> @kamiri.charles</div>
                </a>

                {/* Whatsapp */}
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="" className='whatsapp' target='_blank' rel='noreferrer'>
                    <div className="icon">
                        <FontAwesomeIcon icon={ faWhatsapp } />
                    </div>
                    <div className="link-text">+254 797-317-704 <br />Send a quick text, maybe even a call... and let's connect</div>
                </a>
            </div>
        </div>
    )
}

export default Contact;