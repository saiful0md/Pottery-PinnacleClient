
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";


// import required modules
import { Autoplay, EffectFade } from 'swiper/modules';


const Slider = () => {
    return (
        <div className='h-[600px] bg-gradient-to-r from-[#ffa585] to-[#ffeda0]'>
            <div className='container max-w-6xl mx-auto'>
                <Swiper
                  effect={"fade"}
                  fadeEffect={{ crossFade: true }}
                  slidesPerView={1}
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                    modules={[Autoplay, EffectFade]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='md:h-[500px] h-auto mt-10'>
                            <div className='h-full gap-3 flex flex-col md:flex-row  mx-auto items-center '>
                                <div className='text-start md:ml-10  flex-1 mt-10 md:mt-0 w-full md:w-auto'>
                                    <p className='text-white  xl:text-[45px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left'>
                                        <span>Discover Artistry Ceramics </span>
                                        <br />
                                        <span className='text-gray-700'>Your Gateway to </span>
                                        <br />
                                        <span>Pottery Creations</span>
                                    </p>
                                    <p className='font-medium text-black/60 md:text-lg text-center md:text-left'>Unlock Your Creativity. Dive into Painting & Drawing</p>
                                </div>
                                <div className="w-full md:max-h-[550px]  flex-1 mb-10 md:mb-0">
                                    <img
                                        className="w-full h-[500px]"
                                        src="https://i.ibb.co/MC0PK8m/slider-1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:h-[500px] h-auto mt-10'>
                            <div className='h-full gap-3 flex flex-col md:flex-row  mx-auto items-center'>
                                <div className='text-start md:ml-10 flex-1 mt-10 md:mt-0 w-full md:w-auto'>
                                    <p className='text-white xl:text-[45px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left'>
                                        <span>Unearth the Beauty</span>
                                        <br />
                                        <span className='text-gray-700'>Delve into the World of</span>
                                        <br />
                                        <span>Pottery Creations</span>
                                    </p>
                                    <p className='font-medium text-black/60 md:text-lg text-center md:text-left'>Unlock Your Creativity. Dive into Painting & Drawing</p>
                                </div>
                                <div className="w-full md:max-h-[550px]  flex-1 mb-10 md:mb-0">
                                    <img
                                        className="w-full h-[500px]"
                                        src="https://i.ibb.co/VC0G159/slider-2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:h-[500px] h-auto mt-10'>
                            <div className='h-full gap-3 flex flex-col md:flex-row  mx-auto items-center'>
                                <div className='text-start md:ml-10 flex-1 mt-10 md:mt-0 w-full md:w-auto'>
                                    <p className='text-white xl:text-[45px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left'>
                                        <span>Handcrafted Elegance</span>
                                        <br />
                                        <span className='text-gray-700'>Step into Our World of  </span>
                                        <br />
                                        <span>Ceramics & Pottery</span>
                                    </p>
                                    <p className='font-medium text-black/60 md:text-lg text-center md:text-left'>Unlock Your Creativity. Dive into Painting & Drawing</p>
                                </div>
                                <div className="w-full md:max-h-[550px]  flex-1 mb-10 md:mb-0">
                                    <img
                                        className="w-full h-[500px]"
                                        src="https://i.ibb.co/mhbwXNF/slider-3.png"
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