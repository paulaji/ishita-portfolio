import { useState } from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../public/middlesectionphoto.jpeg';

export const Blog = () => {
  const [hoverColor, setHoverColor] = useState('white');

  return (
    <div style={{ width: '100%', height: '88vh' }}>
      <div
        style={{
          height: '15%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '50px',
          color: '#3b3937',
        }}
      >
        Design Diaries & Creative Chronicles
      </div>
      <div
        style={{
          height: '70%',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '100%',
            display: 'flex',
          }}
        >
          <div
            style={{
              width: '30%',
              height: '100%',
              padding: '3px',
              margin: '0 10px',
              background: '#dce4e3',
              borderRadius: '10px',
            }}
          >
            <Link
              to='/blog1'
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '60%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '80%',
                    height: '80%',
                    backgroundImage: `url(${photo1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '40%',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '18px',
                    textAlign: 'center',
                  }}
                >
                  The Details Behind the Lens
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  Sharing the moments and processes behind my photography,
                  offering insights into process, where it include photographs,
                  with appropriate technical commentary the techniques,
                  emotions, and stories captured in each shot. designer.
                </div>
              </div>
            </Link>
          </div>
          <div
            style={{
              width: '30%',
              height: '100%',
              padding: '3px',
              margin: '0 10px',
              background: '#dce4e3',
              borderRadius: '10px',
            }}
          >
            <Link
              to='/blog2'
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '60%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '80%',
                    height: '80%',
                    backgroundImage: `url(${photo1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '40%',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '18px',
                    textAlign: 'center',
                  }}
                >
                  Behind the Scenes: Crafting a User-Friendly Portfolio
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  Here's a glimpse at how I balance creativity, accessibility,
                  and storytelling in my process. Come along with me as I share
                  the decisions, obstacles, and triumphs that influenced my
                  website!
                </div>
              </div>
            </Link>
          </div>
          <div
            style={{
              width: '30%',
              height: '100%',
              padding: '3px',
              margin: '0 10px',
              background: '#dce4e3',
              borderRadius: '10px',
            }}
          >
            <Link
              to='/blog3'
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '60%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '80%',
                    height: '80%',
                    backgroundImage: `url(${photo1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '40%',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '18px',
                    textAlign: 'center',
                  }}
                >
                  Building Your Brand: The Essentials of Visual Identity
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  Your brand’s visual identity is like its DNA. But how do you
                  distill personality into colors, shapes, and style? Here’s a
                  guide to building a visual identity that doesn’t just look
                  good but also feels like an authentic extension of your
                  brand’s personality.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '15%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button
          style={{
            fontSize: '16px',
            width: '150px',
            height: '50px',
            boxShadow: '5px 5px 10px rgba(0, 0, 0, 1)',
            cursor: 'pointer',
            background: `${hoverColor}`,
          }}
          onMouseEnter={() => {
            setHoverColor('#5c908a');
          }}
          onMouseLeave={() => {
            setHoverColor('white');
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
