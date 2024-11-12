import { Link } from 'react-router-dom';
import coding from '../../assets/images/coding.gif'

const NotFound = () => {
    return <section className='py-8'>
        <div className="container flex flex-col justify-center md:items-center gap-12">
            <div className="lg:h-[600px] overflow-hidden w-full">
                <img src={coding} alt="page-not-found" className='w-full object-cover' />
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="section-title text-center text-2xl lg:text-4xl font-Syne font-bold text-white capitalize">
                    Uh-Oh! Looks like we are still working here
                </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
                <Link to='/' className='btn-lg btn-primary py-5 px-10 text-center flex justify-center items-center'>
                    Home Page
                </Link>
                <Link to='/#contact' className='btn-lg btn-secondary py-5 px-10 text-center flex justify-center items-center'>
                    Contact Us
                </Link>
            </div>
        </div>

    </section>;
};

export default NotFound;
