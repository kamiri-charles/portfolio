import '../styles/Home.scss';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

let typed_text = {
    strings: ["Charles Kamiri"],
    typeSpeed: 40,
    loop: false,
    showCursor: false
} 

const TypedSkills = () => {
	// Create reference to store the DOM element containing the animation
	const el = useRef(null);
  // Create reference to store the Typed instance itself
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        'UI/UX Designer.',
        'Backend Engineer.',
        'Pythonista.',
        'Game Developer.',
        'Java (Spring Boot) Developer.',
        'Content Creator.',
        'Freelancer.',
        'Consultant.'

      ],
      typeSpeed: 60,
      backSpeed: 60,
      shuffle: true,
      loop: true,
      backDelay: 3000
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="wrap">
      <div className="type-wrap">
        <span className='typed-span' ref={el} />
      </div>
    </div>
  );
}

const Home = () => {
    useEffect(() => {
        // eslint-disable-next-line
        const typed = new Typed(".typed", typed_text);
    })


    return (
        <div id='home'>
            <div className="left-section">
                <div className='gr'>Hello there, I'm </div>
                <div className="typed"></div>
                <div className='desc'>
                    A fullstack developer from Kenya.
                </div>

                {/* More info about myself */}
                <div className="info">
                    <p>
                    Growing up in a small town in the East African country of Kenya, I have always been interested in technology. I was raised in an environment where creativity, simplicity and effectiveness were key aspects in everyday designs. This has led me to a passion for creating and building things that are useful and easy to use and yet have some complexity and uniqueness to them. 
                    <br />
                    <br />
                        I have a profound passion in creating beautiful designs and user interfaces. I'm also skilled in backend development and I'm always looking to learn new things.
                    </p>

                </div>

            </div>
            <div className="right-section">
                <img src={require("../assets/images/profile-picture.jpg")} alt="" />
                <TypedSkills />
                <button className='resume'>Download resume</button>
                
            </div>
        </div>
    )
}

export default Home;