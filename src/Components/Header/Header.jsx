import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return <header className='py-8 lg:py-12'>
        <div className="container flex items-center justify-between gap-6">
            <Link to="/" className="font-Syne text-center font-bold text-white text-4xl leading-snug relative uppercase">
                SOB_HI ;
            </Link>
            <button className='text-white lg:hidden' onClick={() => setIsOpen(true)}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M4 15H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
            </button>
            <nav className={`flex flex-col lg:flex-row z-50 justify-evenly lg:justify-normal items-center gap-12 fixed lg:static inset-0 size-full lg:size-auto bg-[#1A1A1A] lg:bg-transparent transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible lg:visible lg:opacity-100"}`}>
                <button className='lg:hidden absolute top-10 end-10 text-white' onClick={() => setIsOpen(false)}>
                    close
                </button>
                <ul className='flex flex-col lg:flex-row items-center gap-10'>
                    <li>
                        <NavLink className='nav-link' to='/' onClick={() => setIsOpen(false)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to='/about' onClick={() => setIsOpen(false)}>About me</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to='/projects' onClick={() => setIsOpen(false)}>My Projects</NavLink>
                    </li>
                </ul>
                <Link to='/#contact' onClick={() => setIsOpen(false)} className='py-4 px-9 rounded-full border-2 border-white border-opacity-30 text-white bg-[#030304] bg-opacity-50 hover:bg-opacity-100 opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out'>
                    Contact
                </Link>
            </nav>
        </div>
    </header>;
};

export default Header;
