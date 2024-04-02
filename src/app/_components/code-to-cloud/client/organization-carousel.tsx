'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

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
      modules={[Autoplay]}
      spaceBetween={38}
      speed={2500}
      effect="fade"
      slidesPerView={5}
      autoplay={{
        delay: 0,
        waitForTransition: true,
        reverseDirection: true,
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
