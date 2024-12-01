import photo3 from '../public/passionphoto.jpeg';

export const Blog3 = () => {
  return (
    <div
      style={{
        height: '110vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '80%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '25%',
            display: 'flex',
            backgroundImage: `url(${photo3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          style={{
            height: '100%',
            width: '65%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '80%' }}>
            <b style={{ fontSize: '26px' }}>Reflecting My Passion</b>
            <br />
            <br />
            <div style={{ fontSize: '16px' }}>
              <ul>
                <li>Model Canon EOS 1300D</li>
                <li>ISO 800</li>
                <li>ShutterSpeedValue 1/9</li>
                <li>Aperture 5.6</li>
                <li>CanonFlashMode Off</li>
                <li>FocusMode One-shot AF</li>
                <li>LensType Canon EF-S 55-250mm f/4-5.6 IS II</li>
                <li>Lens 55.0 - 250.0 mm</li>
                <li>ShootingMode Landscape</li>
              </ul>
            </div>
            <div>
              For this final shot, I wanted to capture my deep appreciation for
              art and the creative process. Set in an art gallery, this image
              reflects the inspiration I draw from historical works and the
              emotional depth embedded in each piece. I’m pictured with my back
              to the camera, gazing at a painting, creating a quiet,
              contemplative mood that mirrors my reverence for art.
            </div>
            <div>
              <ol>
                <li>
                  <b>Setting & Props:</b> Choosing a gallery to host the art was
                  deliberate. Within a gallery space that embodies the very soul
                  of artistic inspiration, a space of contemplation —literally
                  and metaphorically. It reminds me of art, design, and
                  creativity. The paintings you put in the frame matter. The
                  portraits along the wall convey depth and reflection, similar
                  to how I seem both in posture and emotion in the image. They
                  contribute to narrative by insinuating the concept of
                  conversation; between viewer and work, but also work and me as
                  subject.
                </li>
                <li>
                  <b>Framing and Composition:</b> Framing myself, with my back
                  to the camera, looking at the paintings, creates an instant
                  identity of me as a viewer in that space. By suggesting the
                  viewer step into my shoes by asking -- how would they view the
                  something -- through my perspective, I hope to pique
                  curiosity/encouraging sympathetic inquiry. I positioned myself
                  a bit off the center, so that follows the he rule of thirds
                  and it creates a nice balance and a small movement of dynamism
                  to the photo. My presence takes priority in the viewer eye,
                  which then flows up to the paintings. The layout establishes a
                  flow of the work which translates to a connection between me
                  and the art, accentuating a relationship between
                  subject/setting.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
