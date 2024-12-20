import { Link } from "react-router-dom";
import linkedin from '../../assets/images/linkedin.svg'
import call from '../../assets/images/call.svg'
import github from '../../assets/images/github.svg'
const Footer = () => {
    return <footer className="lg:pt-24 py-16 bg-[#131313]" id="contact">
        <div className="container flex flex-col gap-20 lg:gap-32">
            <div className="flex flex-col items-center gap-6">
                <h2 className="text-[#FF9142] lg:text-2xl font-bold font-Syne">
                    Get in Touch With Me
                </h2>
                <Link to='mailto:sobhi7070@gmail.com' className="font-Syne font-bold text-white text-2xl lg:text-6xl leading-snug capitalize text-center underline">
                    sobhi7070@gmail.com
                </Link>
            </div>

            <div className="flex justify-center gap-8 lg:gap-16">
                <Link to='https://www.linkedin.com/in/mohamed-sobhi-omer' target="_blank">
                    <img src={linkedin} width='56' height='56' alt="linkedin" />
                    <span className="sr-only">
                        Linkedin
                    </span>
                </Link>
                <Link to='https://wa.me/+201550417652' target="_blank">
                    <img src={call} width='56' height='56' alt="linkedin" />
                    <span className="sr-only">
                        Whatssapp
                    </span>
                </Link>
                <Link to='https://github.com/mohamedsobhi70' target="_blank">
                    <img src={github} width='56' height='56' alt="linkedin" />
                    <span className="sr-only">
                        Github
                    </span>
                </Link>
            </div>
            <p className="text-center text-sm lg:text-2xl font-bold pt-9 border-t border-[#949494] text-white">
                © {new Date().getFullYear()}. Mohammed Sobhi. All rights reserved.
            </p>
        </div>
    </footer>;
};

export default Footer;
