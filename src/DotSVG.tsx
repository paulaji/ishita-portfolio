import React from 'react';

const DotSVG = () => {
  return (
    <div style={{ cursor: 'pointer', opacity: '50%' }}>
      <svg
        width='30px'
        height='30px'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
        <g
          id='SVGRepo_tracerCarrier'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          {' '}
          <path
            d='M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z'
            fill='#000000'
          ></path>{' '}
        </g>
      </svg>
    </div>
  );
};

export default DotSVG;
