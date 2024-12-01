import photo2 from '../public/aestheticphoto.jfif';

export const Blog2 = () => {
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
            backgroundImage: `url(${photo2})`,
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
            <b style={{ fontSize: '26px' }}>The Aesthetic Shot</b>
            <br />
            <br />
            <div style={{ fontSize: '16px' }}>
              <ul>
                <li>Model Canon EOS 1300D</li>
                <li>ISO 308</li>
                <li>ShutterSpeedValue 1/99</li>
                <li>Aperture 5.6</li>
                <li>CanonFlashMode Off</li>
                <li>FocusMode One-shot AF</li>
                <li>LensType Canon EF-S 55-250mm f/4-5.6 IS II</li>
                <li>Lens 55.0 - 250.0mm</li>
                <li>ShootingMode Landscape</li>
              </ul>
            </div>
            <div>
              Stereotyping is almost inevitable when talking about the role of
              mothers. In this instance, I am no different. The photograph
              depicts my idea of beauty and my love for the surrounding
              greenery. Surrounded by a garden of grinning pink flowers, I
              donned a designer dress with a big rose in my hair. In my opinion,
              this picture is gentle, warm, and dreamy.
            </div>
            <div>
              <ol>
                <li>
                  <b>Color Harmony:</b> It is worth noting that the color scheme
                  here was purposely matched. The pink rose in my hair blends
                  quite well with the background giving a rich sensibility to
                  the subject which is me and my environment. Considering all
                  this, don’t be surprised that I wore a dress with pastel and
                  earthy tones.
                </li>
                <li>
                  <b>Background Choice & Depth:</b> The origin of the theme and
                  a large number of pink flowers support the image with the
                  healthy sense of textures and layers. The bright image of a
                  pink blooming rose on the green leaves of the vine can be
                  beautiful and awe-inspiring as was the case with me. This
                  technique produces a soft layered dream-like quality to the
                  image.
                </li>
                <li>
                  <b>Natural Lighting:</b> This photo was taken outside with
                  natural light in the late afternoon. The sunlight was very
                  soft and well diffused as it didn’t create shadows and it
                  added a romantic softness to the picture. Instead, I looked
                  for a gentle light where I could avoid direct sunlight, which
                  is often too harsh and creates both highlights and shadows.
                  frame.
                </li>
                <li>
                  <b>Personal Reflection:</b> I think this shot of mine
                  represents my literature as it is a place for me to relax as
                  well as get inspired. The place is quite admirably done which
                  also speaks to my love for nature and my interest in
                  designing. Every piece of the puzzle was designed with care,
                  from the colors and the elements to the place itself, so that
                  the image would be calm and meek in all of its aspects.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
