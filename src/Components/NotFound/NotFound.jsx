import { Link } from 'react-router-dom';
// import notfound from '../../assets/images/404.png'

const NotFound = () => {
    return <section className='py-16 lg:py-24'>
        <div className="container flex flex-col justify-center md:items-center gap-12">
            {/* <img src={notfound} width='592' height='395' alt="page-not-found" /> */}
            <div className="flex flex-col gap-3">
                <h2 className="section-title text-center font-black capitalize">
                    Uh-Oh! Looks like you are lost.
                </h2>
                <p className="section-exc text-center">
                    آسفين! الصفحة اللي تبحث عنها غير موجودة بالوقت الحالى
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
                <Link to='/' className='btn-lg btn-primary'>
                    الصفحة الرئيسية
                </Link>
                <Link to='/' className='btn-lg btn-secondary'>
                    الدعم الفنى
                </Link>
            </div>
        </div>

    </section>;
};

export default NotFound;
