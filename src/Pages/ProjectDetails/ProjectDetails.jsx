import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from '../../data/projects'
import rect1 from '../../assets/images/rect-1.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const ProjectDetails = () => {
    const { id } = useParams();
    const proj = projects.find(project => +project.id === +id)
    return <section className='py-32 overflow-hidden'>
        <div className="container flex flex-col gap-28">
            <div className="flex flex-col gap-6 pb-28 border-b border-[#949494]">
                <h2 className="font-Syne font-bold text-white text-6xl leading-snug relative capitalize">
                    <img src={rect1} width="741" height="581" alt="rect" className="absolute start-0 -top-48 -z-10 w-[741px] h-[581px] max-w-fit" />
                    Project Detail
                </h2>
                <p className="text-[#949494] text-lg">
                    Details About The Porject
                </p>
            </div>
            <div className="flex flex-col gap-24">
                <h3 className="text-white font-Syne font-bold text-4xl lg:mx-auto lg:w-3/4">
                    {proj.projectName}
                </h3>
                <div className="aspect-video rounded-3xl overflow-hidden">
                    <img src={proj.thumbnail} alt={proj.projectName} className="size-full object-cover object-top" />
                </div>
                <div className="flex flex-col gap-6 lg:mx-auto lg:w-3/4" >
                    <h3 className="text-white font-Syne font-bold text-3xl">
                        Project Story
                    </h3>
                    <p className="text-[#949494] text-lg leading-relaxed">
                        {proj.describtion}
                    </p>
                </div>
                <div className="flex flex-col gap-8">
                    <Swiper
                        className='w-full !overflow-visible'
                        spaceBetween={32}
                        centeredSlides={true}
                        breakpoints={{
                            220: { slidesPerView: 1.2 },
                            1024: { slidesPerView: 1.4 },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ el: '.projcet-images-pagination', clickable: true }}
                        modules={[Autoplay, Pagination]}>

                        {
                            proj.images.map((img, index) => <SwiperSlide key={index} className="cursor-grab border-2 border-transparent [&.swiper-slide-active]:border-[#FF9142] rounded-3xl overflow-hidden aspect-[7/4]">
                                <img src={img} className="size-full object-cover object-top transition-all ease-linear duration-200 hover:duration-[5s] hover:object-bottom" alt={index} />
                            </SwiperSlide>)
                        }

                    </Swiper>
                    <div className="flex justify-center gap-5 projcet-images-pagination"></div>
                </div>
                <div className="flex justify-between items-center">
                    {id > 1 && <Link to={`/project-details/${+id - 1}`} className="me-auto flex items-center gap-5 text-white uppercase">
                        <svg width="50" height="13" viewBox="0 0 50 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M0.656006 1.33081e-07C-0.606846 2.23877e-05 0.274555 1.41676 0.656006 1.83698L10.8721 12.6848C11.2536 13.1051 11.872 13.1051 12.2535 12.6848C12.6349 12.2646 12.6349 11.5833 12.2535 11.1631L3.7048 2.15214H49.0232C49.5627 2.15214 50 1.67038 50 1.0761C50 0.481823 49.5627 6.58092e-05 49.0232 6.58092e-05H3.7048C3.7048 6.58092e-05 0.858303 -3.43187e-06 0.656006 1.33081e-07Z" fill="white" />
                        </svg>

                        Previous Project
                    </Link>}
                    {id < projects.length && <Link to={`/project-details/${+id + 1}`} className="ms-auto flex items-center gap-5 text-white uppercase">
                        next Project
                        <svg width="50" height="13" viewBox="0 0 50 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M49.344 13C50.6068 13 49.7254 11.5832 49.344 11.163L39.1279 0.315165C38.7464 -0.105054 38.128 -0.105054 37.7465 0.315165C37.3651 0.735383 37.3651 1.41669 37.7465 1.83691L46.2952 10.8479H0.976766C0.437313 10.8479 0 11.3296 0 11.9239C0 12.5182 0.437313 12.9999 0.976766 12.9999H46.2952C46.2952 12.9999 49.1417 13 49.344 13Z" fill="white" />
                        </svg>
                    </Link>}
                </div>
            </div>
        </div>
    </section>;
};

export default ProjectDetails;
