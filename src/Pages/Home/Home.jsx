import Testimonials from "./Testimonials";
import rect1 from '../../assets/images/rect-1.svg'
import arrow from '../../assets/images/arrow.svg'
import about from '../../assets/images/about.jpg'
import { Link, useLocation } from "react-router-dom";
import Projects from "./Projects";
import { useEffect } from "react";
const Home = () => {
  // To move to a specific section
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return <>
    <section className="py-[200px]">
      <div className="container flex flex-col gap-[200px]">
        <div className="flex flex-col gap-24 items-center">
          <h1 className="font-Syne text-center font-bold text-white text-4xl lg:text-7xl leading-snug lg:leading-snug relative capitalize">
            <img src={rect1} width="741" height="581" alt="rect" className="absolute end-0 top-1/2 -translate-y-1/2 -z-10 w-[741px] h-[581px] max-w-fit" />
            Mohammed sobhi omar
            <br /> a frontend Developer
          </h1>
          <Link to='#works' className="btn-primary font-bold flex items-center gap-6 py-6 px-10">
            Explore works
            <img src={arrow} width="18" height="12" alt="arrow" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="flex flex-col gap-20 items-start lg:col-span-7">
            <div className="flex flex-col gap-8 ">
              <h2 className="font-Syne font-bold text-white text-4xl lg:text-6xl leading-snug relative capitalize">
                <img src={rect1} width="741" height="581" alt="rect" className="absolute end-1/2 top-1/2 -translate-y-1/2 -z-10 w-[741px] h-[581px] max-w-fit" />
                Let’s get know about me closer
              </h2>
              <p className="text-[#A8A8A8] text-lg leading-relaxed">
                Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her wide range of work, spanning books, posters and web design.
              </p>
            </div>
            <Link to='/about' className="btn-primary font-bold flex items-center gap-6 py-5 px-10">
              Discover More About Me
            </Link>
          </div>
          <div className="lg:col-span-5 relative">
            <svg className="absolute rotate-90 end-16 -top-20" width="55" height="178" viewBox="0 0 55 178" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="54" height="177" rx="27" stroke="#FF9142" />
            </svg>
            <svg className="absolute -start-[27px] bottom-24" width="55" height="178" viewBox="0 0 55 178" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="54" height="177" rx="27" stroke="#FF9142" />
            </svg>
            <div className="rounded-[30px] overflow-hidden">
              <img src={about} className="size-full object-cover" alt="about" />
            </div>

          </div>
        </div>
      </div>
    </section>
    <Projects />
    <Testimonials />
  </>;
};

export default Home;
