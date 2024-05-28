'use client';

import React, { FC, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { plans } from '@/app/_utils/constants';
import { Plan } from '../../common';

const responsive = {
  mobile: {
    breakpoint: { min: 0, max: 4000 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const PricingCarousel: FC = () => {
  const carouselRef = useRef(null);
  const middleIndex = Math.floor(plans.length / 2);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(middleIndex - 1, false);
    }
  }, [middleIndex]);

  return (
    <Carousel
      ref={carouselRef}
      swipeable={true}
      responsive={responsive}
      infinite={true}
      centerMode={true}
      itemClass="px-2"
      arrows={false}
      showDots={false}
    >
      {plans.map((plan, index) => (
        <Plan {...plan} key={index} />
      ))}
    </Carousel>
  );
};
