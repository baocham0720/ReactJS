// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper/modules';

/* 
- Navigation là đấu mũi tên next qua slide 
- Pagination là dấu chấm tròn giữa slide 
*/

// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperGallery = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50} //Khoảng cách giữa các slide
      slidesPerView={2} //số lượng in trên 1 view
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://movie-site-delta.vercel.app/img/popular-movie-1.jpg"
        alt=""/>
      </SwiperSlide>
      <SwiperSlide><img src="https://movie-site-delta.vercel.app/img/popular-movie-2.jpg"
        alt=""/>
        </SwiperSlide>
      <SwiperSlide><img src="https://movie-site-delta.vercel.app/img/popular-movie-3.jpg"
        alt=""/>
        </SwiperSlide>
      <SwiperSlide><img src="https://movie-site-delta.vercel.app/img/popular-movie-4.jpg"
        alt=""/>
        </SwiperSlide>
        <SwiperSlide><img src="https://movie-site-delta.vercel.app/img/popular-movie-5.jpg"
        alt=""/>
        </SwiperSlide><SwiperSlide><img src="https://movie-site-delta.vercel.app/img/popular-movie-6.jpg"
        alt=""/>
        </SwiperSlide>
        <SwiperSlide><img src="https://movie-site-delta.vercel.app/img/popular-movie-7.jpg"
        alt=""/>
        </SwiperSlide><SwiperSlide><img src="https://movie-site-delta.vercel.app/img/popular-movie-8.jpg"
        alt=""/>
        </SwiperSlide>
      ...
    </Swiper>
  )
}

export default SwiperGallery;