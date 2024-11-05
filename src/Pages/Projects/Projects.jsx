import { projects } from '../../data/projects.js'
import rect1 from '../../assets/images/rect-1.svg'
import { Link } from 'react-router-dom';

const Projects = () => {
    return <section className='py-32 overflow-hidden'>
        <div className="container flex flex-col gap-28">
            <div className="flex flex-col gap-6 pb-28 border-b border-[#949494]">
                <h2 className="font-Syne font-bold text-white text-6xl leading-snug relative capitalize">
                    <img src={rect1} width="741" height="581" alt="rect" className="absolute start-0 -top-48 -z-10 w-[741px] h-[581px] max-w-fit" />
                    My Projects
                </h2>
                <p className="text-[#949494] text-lg">
                    Showcase About Works
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-8 gap-y-16">
                {
                    projects.map(proj => <div key={proj.id} className="work-item" style={{ '--clr': proj.clr }}>
                        <div className="work-item-inner relative rounded-[18px] border border-[#FF9142] border-opacity-5 overflow-hidden before:animate-spin group">
                            <div className="work-item-content">
                                <div className="work-item-img">
                                    <Link to={`/project-details/${proj.id}`}>
                                        <img src={proj.thumbnail} alt={proj.projectName} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <strong className="text-center font-Syne text-2xl text-white">
                            <Link to={`/project-details/${proj.id}`}>
                                {proj.projectName}
                            </Link>
                        </strong>

                    </div>)
                }

            </div>
        </div>
    </section>
};

export default Projects;
