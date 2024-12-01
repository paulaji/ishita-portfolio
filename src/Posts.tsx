import React, { useState } from 'react';
import DotSVG from './DotSVG';
import DotSVGActive from './DotSVGActive';
import SaveSVG from './SaveSVG';
import HeartSVG from './HeartSVG';
import HeartSVGGrey from './HeartSVGGrey';
import CommentSVG from './CommentSVG';
import ShareSVG from './ShareSVG';

import post1 from '../public/postspost1.jpg';
import post2 from '../public/postspost2.jpg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './posts.css';

const Posts = () => {
  const [firstImage, setFirstImage] = useState(true);
  const [likeInteraction, setLikeInteraction] = useState(true);
  const [buttonBG, setButtonBG] = useState('transparent');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='posts-container'>
      <div className='posts-card'>
        <div className='posts-header'>
          <svg
            className='posts-options-icon'
            width='30px'
            height='30px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z'
              fill='#000000'
            ></path>
            <path
              d='M12 6.75C12.9665 6.75 13.75 5.9665 13.75 5C13.75 4.0335 12.9665 3.25 12 3.25C11.0335 3.25 10.25 4.0335 10.25 5C10.25 5.9665 11.0335 6.75 12 6.75Z'
              fill='#000000'
            ></path>
            <path
              d='M12 20.75C12.9665 20.75 13.75 19.9665 13.75 19C13.75 18.0335 12.9665 17.25 12 17.25C11.0335 17.25 10.25 18.0335 10.25 19C10.25 19.9665 11.0335 20.75 12 20.75Z'
              fill='#000000'
            ></path>
          </svg>
        </div>
        <div className='posts-image-container'>
          {firstImage ? (
            <img src={post1} alt='Post 1' className='posts-image' />
          ) : (
            <img src={post2} alt='Post 2' className='posts-image' />
          )}
        </div>
        <div className='posts-footer'>
          <div className='posts-actions'>
            <div className='posts-left-actions'>
              <div
                className='posts-like-icon'
                onClick={() => setLikeInteraction(!likeInteraction)}
              >
                {likeInteraction ? <HeartSVG /> : <HeartSVGGrey />}
              </div>
              <CommentSVG />
              <ShareSVG />
            </div>
            <div className='posts-pagination'>
              {firstImage ? (
                <>
                  <DotSVGActive />
                  <DotSVG onClick={() => setFirstImage(false)} />
                </>
              ) : (
                <>
                  <DotSVG onClick={() => setFirstImage(true)} />
                  <DotSVGActive />
                </>
              )}
            </div>
            <SaveSVG />
          </div>
          <div className='posts-likes'>
            {likeInteraction ? (
              <span>
                Liked by <b>you, joex123, janex32</b> and others
              </span>
            ) : (
              <span>
                Liked by <b>joex123, janex32</b> and others
              </span>
            )}
          </div>
        </div>
      </div>
      <button
        className='posts-add-button'
        style={{ backgroundColor: buttonBG }}
        onMouseEnter={() => setButtonBG('rgb(92, 144, 138)')}
        onMouseLeave={() => setButtonBG('transparent')}
        onClick={handleShow}
      >
        +
      </button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>{/* Form */}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='dark' onClick={handleClose}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Posts;
