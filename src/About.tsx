import photo1 from '../public/middlesectionphoto.jpeg';
import dPDF from '../public/Ishita-Baluni-Resume.pdf';

import StarSVG from './StarSVG';
import PersonSVG from './PersonSVG';
import { useState } from 'react';

export const About = () => {
  const [loadedMore, setLoadedMore] = useState(false);

  return (
    <>
      {/* First Section */}
      <div
        style={{
          height: '88vh',
          width: '100%',
          display: 'flex',
          background: '#eaeae9',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              height: '80%',
              width: '60%',
              backgroundImage: `url(${photo1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div
          style={{
            height: '100%',
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              height: '80%',
              width: '80%',
            }}
          >
            <div style={{ height: '15%', width: '100%', fontSize: '50px' }}>
              About Me
            </div>
            <div style={{ height: '5%', width: '100%' }}></div>
            <div style={{ height: '45%', width: '100%', fontSize: '26px' }}>
              I've worked in the fields of marketing, branding, and design, with
              large, established firms and studios. I learned a lot from them. I
              learned a lot from them—the power of a strong brand identity, the
              impact of storytelling, and the importance of user-centered
              design.
              <br />
              Now, I’m all about making designs that don’t just look good—they
              make a difference.
            </div>
            <div style={{ height: '15%', width: '100%' }}></div>
            <div
              style={{
                height: '25%',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
              }}
            >
              <a href={dPDF}>
                <button
                  style={{
                    fontSize: '16px',
                    width: '150px',
                    height: '50px',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 1)',
                    cursor: 'pointer',
                  }}
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div style={{ height: '100vh', background: '#eaeae9' }}>
        <div
          style={{
            height: '20%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '52px',
          }}
        >
          MY JOURNEY
        </div>
        <div style={{ height: '80%', display: 'flex' }}>
          {/* Education */}
          <div
            style={{
              height: '100%',
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '80%', height: '80%' }}>
              <div
                style={{
                  width: '100%',
                  height: '20%',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '25px',
                }}
              >
                Education
              </div>
              <div
                style={{
                  background: 'white',
                  height: '30%',
                  borderRadius: '10px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '30%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ marginTop: '10px' }}>2020</span>
                </div>
                <div
                  style={{
                    height: '100%',
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span style={{ marginTop: '10px' }}>
                    <b>B.Des (Communication Design)</b>
                  </span>
                  <span style={{ marginTop: '10px' }}>
                    Banasthali University
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: '#dce4e3',
                  height: '30%',
                  borderRadius: '10px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '30%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ marginTop: '10px' }}>2025</span>
                </div>
                <div
                  style={{
                    height: '100%',
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span style={{ marginTop: '10px' }}>
                    <b>MA Interaction and User Experience Design</b>
                  </span>
                  <span style={{ marginTop: '10px' }}>
                    University of Limerick
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div
            style={{
              height: '100%',
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '80%', height: '80%' }}>
              <div
                style={{
                  width: '100%',
                  height: '20%',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '25px',
                }}
              >
                Experience
              </div>
              <div
                style={{
                  background: 'white',
                  height: '30%',
                  borderRadius: '10px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '30%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ marginTop: '10px' }}>2022</span>
                </div>
                <div
                  style={{
                    height: '100%',
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span style={{ marginTop: '10px' }}>
                    <b>Junior Graphic Designer</b>
                  </span>
                  <span style={{ marginTop: '10px' }}>BAMKO</span>
                </div>
              </div>
              <div
                style={{
                  background: '#dce4e3',
                  height: '30%',
                  borderRadius: '10px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: '30%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ marginTop: '10px' }}>2022-2024</span>
                </div>
                <div
                  style={{
                    height: '100%',
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span style={{ marginTop: '10px' }}>
                    <b>Graphic designer</b>
                  </span>
                  <span style={{ marginTop: '10px' }}>Fantasy Akhada</span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* Third Section */}
      <div style={{ minheight: '100vh', background: '#eaeae9' }}>
        {/* What I Offer */}
        <div
          style={{
            height: '30%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <span style={{ fontSize: '50px' }}>What I Offer</span>
          <span style={{ marginTop: '10px', fontSize: '25px' }}>
            Curious? Here are services I can offer you
          </span>
        </div>
        {/* Cards */}
        <br />
        <div
          style={{
            height: '30%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              background: 'white',
              width: '250px',
              height: '200px',
              marginRight: '20px',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '60px', marginTop: '15px' }}>1</span>
            <span style={{ fontSize: '20px', marginTop: '50px' }}>
              BRANDING
            </span>
            <span style={{ marginTop: '10px' }}>
              <svg
                fill='#000000'
                height='15px'
                width='15px'
                version='1.1'
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlns:xlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 330 330'
                xml:space='preserve'
              >
                <path
                  id='XMLID_225_'
                  d='M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z'
                />
              </svg>
            </span>
          </div>
          <div
            style={{
              background: 'white',
              width: '250px',
              height: '200px',
              marginRight: '20px',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '60px', marginTop: '15px' }}>2</span>
            <span style={{ fontSize: '20px', marginTop: '50px' }}>
              UI DESIGN
            </span>
            <span style={{ marginTop: '10px' }}>
              <svg
                fill='#000000'
                height='15px'
                width='15px'
                version='1.1'
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlns:xlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 330 330'
                xml:space='preserve'
              >
                <path
                  id='XMLID_225_'
                  d='M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z'
                />
              </svg>
            </span>
          </div>
          <div
            style={{
              background: 'white',
              width: '250px',
              height: '200px',
              marginRight: '20px',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '60px', marginTop: '15px' }}>3</span>
            <span style={{ fontSize: '20px', marginTop: '50px' }}>
              INTERACTION DESIGN
            </span>
            <span style={{ marginTop: '10px' }}>
              <svg
                fill='#000000'
                height='15px'
                width='15px'
                version='1.1'
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlns:xlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 330 330'
                xml:space='preserve'
              >
                <path
                  id='XMLID_225_'
                  d='M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z'
                />
              </svg>
            </span>
          </div>
        </div>
        {loadedMore && (
          <div>
            <br />
            <div
              style={{
                height: '30%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  background: 'white',
                  width: '250px',
                  height: '200px',
                  marginRight: '20px',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '60px', marginTop: '15px' }}>4</span>
                <span style={{ fontSize: '20px', marginTop: '50px' }}>
                  ADVERTISEMENT
                </span>
                <span style={{ marginTop: '10px' }}>
                  <svg
                    fill='#000000'
                    height='15px'
                    width='15px'
                    version='1.1'
                    id='Layer_1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlns:xlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 330 330'
                    xml:space='preserve'
                  >
                    <path
                      id='XMLID_225_'
                      d='M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z'
                    />
                  </svg>
                </span>
              </div>
              <div
                style={{
                  background: 'white',
                  width: '250px',
                  height: '200px',
                  marginRight: '20px',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '60px', marginTop: '15px' }}>5</span>
                <span style={{ fontSize: '20px', marginTop: '50px' }}>
                  LOGO
                </span>
                <span style={{ marginTop: '10px' }}>
                  <svg
                    fill='#000000'
                    height='15px'
                    width='15px'
                    version='1.1'
                    id='Layer_1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlns:xlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 330 330'
                    xml:space='preserve'
                  >
                    <path
                      id='XMLID_225_'
                      d='M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z'
                    />
                  </svg>
                </span>
              </div>
              <div
                style={{
                  background: 'white',
                  width: '250px',
                  height: '200px',
                  marginRight: '20px',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '60px', marginTop: '15px' }}>6</span>
                <span style={{ fontSize: '20px', marginTop: '50px' }}>
                  PHOTOGRAPHY
                </span>
                <span style={{ marginTop: '10px' }}>
                  <svg
                    fill='#000000'
                    height='15px'
                    width='15px'
                    version='1.1'
                    id='Layer_1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlns:xlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 330 330'
                    xml:space='preserve'
                  >
                    <path
                      id='XMLID_225_'
                      d='M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        )}
        {/* Load More */}
        <div
          style={{
            height: '25%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {!loadedMore && (
            <button
              style={{
                fontSize: '16px',
                width: '150px',
                height: '50px',
                boxShadow: '5px 5px 10px rgba(0, 0, 0, 1)',
                cursor: 'pointer',
                marginTop: '200px',
              }}
              onClick={() => {
                setLoadedMore(true);
              }}
            >
              Load More
            </button>
          )}
          {loadedMore && (
            <button
              style={{
                fontSize: '16px',
                width: '150px',
                height: '50px',
                boxShadow: '5px 5px 10px rgba(0, 0, 0, 1)',
                cursor: 'pointer',
                marginTop: '200px',
              }}
              onClick={() => {
                setLoadedMore(false);
              }}
            >
              Load Less
            </button>
          )}
        </div>
      </div>
      {/* Fourth Section */}
      <div style={{ height: '100vh', background: '#eaeae9' }}>
        {/* what our clients say */}
        <div
          style={{
            height: '40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '50px',
          }}
        >
          What Our Clients Say
        </div>
        <div style={{ height: '60%', display: 'flex' }}>
          <div style={{ width: '10%' }}></div>
          <div
            style={{
              width: '23%',
            }}
          >
            <div style={{ display: 'flex' }}>
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
            </div>
            <br />
            <div style={{ fontSize: '25px', width: '90%' }}>
              Boost your product and service's credibility by adding
              testimonials from your clients. People love recommendations so
              feedback from others who've tried it is invaluable.
            </div>
            <br />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '25px',
              }}
            >
              <PersonSVG />
              <span style={{ opacity: '0' }}>...</span>
              <span>Gaurav Devi</span>
            </div>
          </div>
          <div style={{ width: '10%' }}></div>
          <div
            style={{
              width: '23%',
            }}
          >
            <div style={{ display: 'flex' }}>
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
            </div>
            <br />
            <div style={{ fontSize: '25px', width: '90%' }}>
              Boost your product and service's credibility by adding
              testimonials from your clients. People love recommendations so
              feedback from others who've tried it is invaluable.
            </div>
            <br />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '25px',
              }}
            >
              <PersonSVG />
              <span style={{ opacity: '0' }}>...</span>
              <span style={{ marginLeft: '20' }}>Sagar Sighnal</span>
            </div>
          </div>
          <div style={{ width: '10%' }}></div>
          <div
            style={{
              width: '23%',
            }}
          >
            <div style={{ display: 'flex' }}>
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
            </div>
            <br />
            <div style={{ fontSize: '25px', width: '90%' }}>
              Boost your product and service's credibility by adding
              testimonials from your clients. People love recommendations so
              feedback from others who've tried it is invaluable.
            </div>
            <br />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '25px',
              }}
            >
              <PersonSVG />
              <span style={{ opacity: '0' }}>...</span>
              <span style={{ marginLeft: '20' }}>Bhagat Singh</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
