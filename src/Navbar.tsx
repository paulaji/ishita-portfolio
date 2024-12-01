import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-content'>
        <div className='navbar-logo'>
          <Link to='/My-Portfolio' className='navbar-link'>
            IB
          </Link>
        </div>
        <div className='navbar-links'>
          <Link to='/about' className='navbar-link'>
            <div>About</div>
          </Link>
          <Link to='/work' className='navbar-link'>
            <div>Work</div>
          </Link>
          <Link to='/blog' className='navbar-link'>
            <div>Blog</div>
          </Link>
          <Link to='/contact' className='navbar-link'>
            <div>Contact</div>
          </Link>
          <Link to='/posts' className='navbar-link'>
            <div>Posts</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
