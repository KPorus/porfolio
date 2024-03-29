import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Style.css"
const Header = () => {
  return (
    <div className='navbar '>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 font-bold text-green-600'>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT ME</Link>
            </li>
            <li>
              <Link to='/skill'>SKILLS</Link>
            </li>
            <li>
              <Link to='/project'>PROJECTS</Link>
            </li>
            <li>
              <a href='https://dev.to/kporus/unveiling-the-effects-of-icons-on-website-performance-part-two-4h41'>
                BLOGS
              </a>
            </li>
          </ul>
        </div>
        <Link to='/' className='text-xl text-green-500 font-bold'>
          FARDIN KHAN
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 font-bold text-green-600'>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/about'>ABOUT ME</Link>
          </li>
          <li>
            <Link to='/skill'>SKILLS</Link>
          </li>
          <li>
            <Link to='/project'>PROJECTS</Link>
          </li>
          <li>
            <a href='https://dev.to/kporus/unveiling-the-effects-of-icons-on-website-performance-part-two-4h41'>
              BLOGS
            </a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Link
          to='/contract'
          className='btn uppercase bg-transparent border-[green]'>
          Let's Talk
        </Link>
      </div>
    </div>
  );
};

export default Header;
