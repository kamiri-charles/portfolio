/* eslint-disable no-undef */
/* eslint-disable default-case */
import { faGithub, faWhatsapp, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import '../styles/Contact.scss'

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
        <div id='contact'>
            <div className='sub-title'>Get in touch</div>
            <div className='left'>
                <form action='https://formsubmit.co/5468185aaec8dc6707c6f8bc9216c88c' method='POST'>
                    <div className='sub-sub-title'>Send me an email.</div>
                    <label>
                        Subject
                        <input type='text' id='input_1' name='Subject' required />
                    </label>

                    <label>
                        Email
                        <input type='email' id='input_2' name='Email' required />
                    </label>
                    <input type='hidden' name='_captcha' value='false' />
                    <input type='hidden' name='_next' value='https://portfolio.kamiri.live/#/email-submission-success' />
                    <div className='to'>
                        <span>To: </span>
                        charleskamiri6@gmail.com
                        </div>
                    <textarea placeholder='Message'></textarea>
                    <button className='send'>Send</button>
                </form>
            </div>
            <div className='border'></div>


            <div className='right'>
                {/* Github */}
                <a href='https://github.com/kamiri-charles' className='github' target='_blank' rel='noreferrer'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={ faGithub } />
                    </div>
                    <div className='link-text'>Contribute to some of my projects on GitHub <br /> @kamiri-charles</div>
                </a>

                {/* Discord */}
                <a href='https://discord.com' className='discord' target='_blank' rel='noreferrer'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={ faDiscord } />
                    </div>
                    <div className='link-text'>I'm also available on Discord. <br /> @kamiri_ke</div>
                </a>

                {/* Whatsapp */}
                <a href='https://wa.me/254797317704' className='whatsapp' target='_blank' rel='noreferrer'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={ faWhatsapp } />
                    </div>
                    <div className='link-text'>+254 797-317-704 <br />Send a quick text, maybe even a call... and let's connect</div>
                </a>
            </div>
        </div>
    )
}

export default Contact;