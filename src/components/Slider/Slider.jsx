
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Autoplay, } from 'swiper/modules';


const Slider = () => {
    return (
        <div className='bg-white'>
            <div className='container max-w-6xl mx-auto'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='md:h-[500px] h-auto'>
                            <div className='h-full gap-3 flex flex-col md:flex-row max-w-5xl mx-auto items-center '>
                                <div className='text-start  md:pl-10 flex-1 mt-10 md:mt-0 w-full md:w-auto'>
                                    <p className='xl:text-[45px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left'>
                                        <span>Discover Artistry Ceramics </span>
                                        <br />
                                        <span>Your Gateway to Exquisite</span>
                                        <br />
                                        <span>& Pottery Creations</span>
                                    </p>
                                    <p className='font-medium text-black/60 md:text-lg text-center md:text-left'>Unlock Your Creativity. Dive into Painting & Drawing</p>
                                </div>
                                <div className="w-full md:max-h-[500px]  flex-1 mb-10 md:mb-0">
                                    <img
                                        className="w-full"
                                        src="https://i.ibb.co/vmfD6p3/sake-container-isolated-23-2151439254.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:h-[500px] h-auto'>
                            <div className='h-full gap-3 flex flex-col md:flex-row max-w-5xl mx-auto items-center'>
                                <div className='text-start md:pl-10 flex-1 mt-10 md:mt-0 w-full md:w-auto'>
                                    <p className='xl:text-[45px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left'>
                                        <span>Unearth the Beauty</span>
                                        <br />
                                        <span>Delve into the World of</span>
                                        <br />
                                        <span>Pottery Creations</span>
                                    </p>
                                    <p className='font-medium text-black/60 md:text-lg text-center md:text-left'>Unlock Your Creativity. Dive into Painting & Drawing</p>
                                </div>
                                <div className="w-full md:max-h-[500px]  flex-1 mb-10 md:mb-0">
                                    <img
                                        className="w-full"
                                        src="https://i.ibb.co/Mnxp1Kj/sake-container-isolated-23-2151439268.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:h-[500px] h-auto'>
                            <div className='h-full gap-3 flex flex-col md:flex-row max-w-5xl mx-auto items-center'>
                                <div className='text-start md:pl-10 flex-1 mt-10 md:mt-0 w-full md:w-auto'>
                                    <p className='xl:text-[45px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left'>
                                        <span>Handcrafted Elegance</span>
                                        <br />
                                        <span>Step into Our World of  </span>
                                        <br />
                                        <span>Ceramics & Pottery</span>
                                    </p>
                                    <p className='font-medium text-black/60 md:text-lg text-center md:text-left'>Unlock Your Creativity. Dive into Painting & Drawing</p>
                                </div>
                                <div className="w-full md:max-h-[500px]  flex-1 mb-10 md:mb-0">
                                    <img
                                        className="w-full"
                                        src="https://i.ibb.co/VwJNRWR/ceramic-object-isolated-23-2151269157.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;