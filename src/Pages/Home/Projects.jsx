import { Link } from 'react-router-dom';
import rect1 from '../../assets/images/rect-1.svg'
import arrow from '../../assets/images/arrow-primary.svg'
import { projects } from '../../data/projects.js'
const Projects = () => {
    const selectedProj = projects.slice(0, 4)
    return <section className="py-24" id='works'>
        <div className="container flex flex-col gap-20">
            <h2 className="font-Syne font-bold text-white text-4xl lg:text-6xl leading-snug relative capitalize text-center">
                <img src={rect1} width="741" height="581" alt="rect" className="absolute end-0 top-1/2 -translate-y-1/2 -z-10" />
                My Projects Highlight
            </h2>
            <div className="flex flex-col gap-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-24 gap-x-7">
                    {
                        selectedProj.map(proj => <article key={proj.id} className="project-card">
                            <Link to={`/project-details/${proj.id}`} className="project-card-img">
                                    <img src={proj.thumbnail} alt="project" />
                            </Link>
                            <h3 className="project-link">
                                <Link to={`/project-details/${proj.id}`}>
                                    {proj.projectName}
                                </Link>
                            </h3>
                        </article>)
                    }


                </div>
                <Link to='/projects' className='btn-secondary px-12 py-6 mx-auto flex items-center justify-center gap-6'>
                    Explore More
                    <img src={arrow} width="18" height="12" alt="arrow" />
                </Link>
            </div>
        </div>
    </section>;
};

export default Projects;
