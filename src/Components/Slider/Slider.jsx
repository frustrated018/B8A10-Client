import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import SliderCard from './SliderCard';


const Slider = () => {
  return (
    <>
    <div className="text-center text-black text-4xl pt-10">Promotional Offers</div>
       <Swiper
       slidesPerView={1}
       spaceBetween={30}
       loop={true}
       pagination={{
         clickable: true,
       }}
       navigation={true}
       modules={[Pagination, Navigation]}
       className="mySwiper"
      >
        <SwiperSlide><SliderCard></SliderCard></SwiperSlide>
        <SwiperSlide><SliderCard></SliderCard></SwiperSlide>
        <SwiperSlide><SliderCard></SliderCard></SwiperSlide>
        <SwiperSlide><SliderCard></SliderCard></SwiperSlide>
        <SwiperSlide><SliderCard></SliderCard></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
