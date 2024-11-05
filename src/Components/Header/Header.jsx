import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return <header className='py-12'>
        <div className="container flex items-center justify-between gap-6">
            <Link to="/" className="font-Syne text-center font-bold text-white text-4xl leading-snug relative uppercase">
                SOB_HI ;
            </Link>

            <nav className='flex items-center gap-12'>
                <ul className='flex items-center gap-10'>
                    <li>
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to='/about'>About me</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to='/projects'>My Projects</NavLink>
                    </li>
                </ul>
                <Link to='/#contact' className='py-4 px-9 rounded-full border-2 border-white border-opacity-30 text-white bg-[#030304] bg-opacity-50 hover:bg-opacity-100 opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out'>
                    Contact
                </Link>
            </nav>
        </div>
    </header>;
};

export default Header;
