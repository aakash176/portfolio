import React from 'react'
import avt1 from '../../assets/avatar1.jpg'
import avt2 from '../../assets/avatar2.jpg'
import avt3 from '../../assets/avatar3.jpg'
import avt4 from '../../assets/avatar4.jpg'
import './testimonal.css'
// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
const data = [
  {
    avatar:avt1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus soluta aliquam facere nulla tempore eligendi culpa quidem officiis a ex Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar:avt2,
    name: 'Iron Man',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus soluta aliquam facere nulla tempore eligendi culpa quidem officiis a ex Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar:avt3,
    name: 'John Wick',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus soluta aliquam facere nulla tempore eligendi culpa quidem officiis a ex Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar:avt4,
    name: 'Jphn Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus soluta aliquam facere nulla tempore eligendi culpa quidem officiis a ex Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
]


const Testimonal = () => {
  return (
    <section id='testimonals'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
            
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonal