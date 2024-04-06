'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { Autoplay, FreeMode, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/virtual';

const OrgImages = [
  'images/code-to-cloud/ghost.svg',
  'images/code-to-cloud/buffer.svg',
  'images/code-to-cloud/balsamiq.svg',
  'images/code-to-cloud/basecamp.svg',
  'images/code-to-cloud/trello.svg',
];

export const OrganizationCarousel: FC = () => {
  return (
    <Swiper
      className="mt-16"
      modules={[Autoplay, FreeMode, Virtual]}
      spaceBetween={38}
      speed={5000}
      effect="fade"
      slidesPerView={5}
      direction='horizontal'
      autoplay={{
        delay: 2500,
        waitForTransition: false,
        disableOnInteraction: false,
      }}
      wrapperClass="flex items-center"
    >
      {[...OrgImages, ...OrgImages].map((src, index) => (
        <SwiperSlide key={index}>
          <Image width={0} height={0} alt="Ghost" className="w-fit opacity-40" src={src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
