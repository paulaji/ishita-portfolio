import { useState } from 'react';
import { Link } from 'react-router-dom';

import dPDF from '../public/Ishita-Baluni-Resume.pdf';

import middleSectionPhoto from '../public/middlesectionphoto.jpeg';

export const FirstPage = () => {
  const [hoverButton, setHoverButton] = useState<null | string>(null);

  const buttonStyle = (isHovered: boolean) => ({
    fontSize: '16px',
    width: '225px',
    height: '50px',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 1)',
    background: isHovered ? '#5c908a' : 'white',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    marginBottom: '15px',
  });

  return (
    <div style={{ background: '#eaeae9' }}>
      {/* Nav Section */}
      <div
        style={{
          height: '15vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '60px',
        }}
      >
        <div style={{ width: '85%' }}>IB</div>
      </div>

      {/* Middle Section */}
      <div
        style={{
          height: '45vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', width: '85%', height: '100%' }}>
          {/* Left Column */}
          <div style={{ width: '25%', height: '100%' }}>
            <div style={{ height: '40%', fontSize: '40px' }}>
              <div>Ishita Baluni</div>
              <div style={{ color: '#bd8f53' }}>(she/her)</div>
            </div>
            <div style={{ height: '29%', color: '#bd8f53', fontSize: '20px' }}>
              Designer
            </div>
            <div
              style={{
                height: '30%',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <a href={dPDF}>
                <button
                  style={buttonStyle(hoverButton === 'Download CV')}
                  onMouseEnter={() => setHoverButton('Download CV')}
                  onMouseLeave={() => setHoverButton(null)}
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Center Column */}
          <div
            style={{
              width: '50%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={middleSectionPhoto}
              alt=''
              style={{ width: '80%', height: '100%' }}
            />
          </div>

          {/* Right Column */}
          <div style={{ width: '25%', height: '100%' }}>
            {['About', 'Work', 'Blog', 'Posts', 'Contact'].map((label) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'end',
                }}
              >
                <Link to={`/${label}`} style={{ textDecoration: 'none' }}>
                  <button
                    style={buttonStyle(hoverButton === label)}
                    onMouseEnter={() => setHoverButton(label)}
                    onMouseLeave={() => setHoverButton(null)}
                  >
                    {label}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Breaker vh */}
      <div style={{ height: '5vh' }}></div>

      {/* Last Section */}
      <div
        style={{
          height: '35vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '85%', height: '100%' }}>
          <div style={{ height: '33%', color: '#bd8f53', fontSize: '22px' }}>
            Hey there! I’m Ishita Baluni – Designer, Creator, & UX Enthusiast
          </div>
          <div style={{ height: '33%', fontSize: '17px' }}>
            Welcome to my corner of the internet! I’m Ishita, a designer with a
            love for transforming ideas into polished, user-friendly designs.
            With experience across web, graphic, and interactive design, I bring
            creativity and a people-first approach to every project.
          </div>
          <div style={{ height: '33%', fontSize: '17px' }}>
            From UX and UI design to digital storytelling and graphic visuals, I
            bring a human touch to every project. Ready to turn those big ideas
            into reality? Let’s make something amazing together!
          </div>
        </div>
      </div>
    </div>
  );
};
