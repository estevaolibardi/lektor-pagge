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
      <h1>Empresas que já confiam no monitoramento Lektor</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box>
            <div>
              <Image
                src="/jaepel.jpg"
                alt="monitoring"
                width={115}
                height={40}
              />

              <Image
                src="/bosch.png"
                alt="monitoring"
                width={160}
                height={40}
              />

              <Image
                src="/ambev.png"
                alt="monitoring"
                width={120}
                height={35}
              />

              <Image
                src="/solvian.png"
                alt="monitoring"
                width={150}
                height={40}
              />
            </div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <div>
              <Image
                src="/jaepel.jpg"
                alt="monitoring"
                width={115}
                height={40}
              />

              <Image
                src="/bosch.png"
                alt="monitoring"
                width={160}
                height={40}
              />

              <Image
                src="/ambev.png"
                alt="monitoring"
                width={120}
                height={35}
              />

              <Image
                src="/solvian.png"
                alt="monitoring"
                width={150}
                height={40}
              />
            </div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <div>
              <Image
                src="/jaepel.jpg"
                alt="monitoring"
                width={115}
                height={40}
              />

              <Image
                src="/bosch.png"
                alt="monitoring"
                width={160}
                height={40}
              />

              <Image
                src="/ambev.png"
                alt="monitoring"
                width={120}
                height={35}
              />

              <Image
                src="/solvian.png"
                alt="monitoring"
                width={150}
                height={40}
              />
            </div>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
