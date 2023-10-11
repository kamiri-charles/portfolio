import { useEffect, useRef } from 'react';
import '../styles/Contact.scss';

const Contact = () => {

    const input_1 = useRef();
    const input_2 = useRef();

    useEffect(() => {
        input_1.current.addEventListener('focusout', () => {
            input_1.current.value !== '' ? input_1.current.classList.add('active') : input_1.current.classList.remove('active'); 
        })

        input_2.current.addEventListener('focusout', () => {
            input_2.current.value !== '' ? input_2.current.classList.add('active') : input_1.current.classList.remove('active'); 
        })
    });

    return (
      <div id="contact">
        <div className="sub-title">Get in touch</div>
        <div className="left">
          <form
            action="https://formsubmit.co/5468185aaec8dc6707c6f8bc9216c88c"
            method="POST"
          >
            <label>
              Subject
              <input type="text" ref={input_1} name="Subject" required />
            </label>

            <label>
              Email
              <input type="email" ref={input_2} name="Email" required />
            </label>
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://portfolio.kamiri.live/portfolio/email-submission-success"
            />
            <div className="to">
              <span>To: </span>
              charleskamiri6@gmail.com
            </div>
            <textarea placeholder="Message"></textarea>
            <button className="send">Send</button>
          </form>
        </div>
        <div className="border"></div>

        <div className="right">
          {/* Github */}
          <a
            href="https://github.com/kamiri-charles"
            className="github"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon">
              <i className="bx bxl-github"></i>
            </div>
            <div className="link-text">
              Contribute to some of my projects on GitHub <br /> @kamiri-charles
            </div>
          </a>

          {/* Discord */}
          <a
            href="https://discord.com"
            className="discord"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon">
              <i className="bx bxl-discord-alt"></i>
            </div>
            <div className="link-text">
              I'm also available on Discord. <br /> @kamiri_ke
            </div>
          </a>

          {/* Whatsapp */}
          <a
            href="https://wa.me/254797317704"
            className="whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon">
              <i className="bx bxl-whatsapp"></i>
            </div>
            <div className="link-text">
              +254 797-317-704 <br />
              Send a quick text, maybe even a call... and let's connect
            </div>
          </a>
        </div>
      </div>
    );
}

export default Contact;