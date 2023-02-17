import { ReactNode } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Box } from './styles';
import 'swiper/css';
import '../../globalstyles';
import Image from 'next/image';

export function TrustBy() {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 4500,
        //   disableOnInteraction: false,
        // }}
        effect={'fade'}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box>
            <div></div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <div></div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <div></div>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
