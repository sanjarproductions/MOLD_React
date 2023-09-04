import React from 'react'
import './Banner.scss'
import { Container } from '../../utils/Utils'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

import firstBannerPhoto from '../../img/banner-1.svg'
import secondBannerPhoto from '../../img/banner-2.svg'

const Banner = () => {
    return (
        <div>
            <>
                <Container>
                    <div className="banner-wrapper">
                        <Swiper

                            pagination={true}
                            autoplay={{ delay: 1000 }}
                            loop={true}
                            navigation={true}
                            draggable={true}
                            modules={[Pagination, Navigation]} className="banner-swiper">
                            <SwiperSlide><img src={firstBannerPhoto} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={secondBannerPhoto} alt="" /></SwiperSlide>
                        </Swiper>
                    </div>

                </Container>
            </>
        </div>
    )
}

export default Banner
