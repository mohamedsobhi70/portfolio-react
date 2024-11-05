import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import rect1 from '../../assets/images/rect-1.svg'
import qt from '../../assets/images/qt.svg'

const Testimonials = () => {
    return <section className='py-32'>
        <div className="container flex flex-col gap-16">
            <div className="flex items-end justify-between">
                <h2 className="font-Syne font-bold text-white text-6xl leading-snug relative capitalize">
                    <img src={rect1} width="741" height="581" alt="rect" className="absolute end-0 top-1/2 -translate-y-1/2 -z-10 w-[741px] h-[581px] max-w-fit" />
                    Testimonials
                </h2>
                <img src={qt} width="161" height="93" alt="qt" />
            </div>
            <Swiper
                className='w-full lg:w-3/4 lg:!ms-0'
                spaceBetween={32}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}>
                <SwiperSlide >
                    <div className="flex flex-col gap-8">
                        <p className="text-xl capitalize text-[#949494] leading-normal">
                            "Mohamed is a very talented UI Engineer who listens carefully and never bothers with polishing or fine detailing. I highly recommend Mohamed and will hire him again."
                        </p>
                        <strong className='text-white text-2xl font-Syne'>
                            -Mohammed Mosaad
                        </strong>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="flex flex-col gap-8">
                        <p className="text-xl capitalize text-[#949494] leading-normal">
                            "Beautiful result. Mohamed Sobhi Was very kind and very helpful, he was very easy to deal with. he is very flexible for edits. I recommend him."
                        </p>
                        <strong className='text-white text-2xl font-Syne'>
                            -kamiran selevani
                        </strong>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="flex flex-col gap-8">
                        <p className="text-xl capitalize text-[#949494] leading-normal">
                            "Mohamed Sobhi did a very good job, he did more then expected, very good communication.
                            Great work. Highly recommended."                        </p>
                        <strong className='text-white text-2xl font-Syne'>
                            -Jacob Montoya
                        </strong>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    </section>;
};

export default Testimonials;
