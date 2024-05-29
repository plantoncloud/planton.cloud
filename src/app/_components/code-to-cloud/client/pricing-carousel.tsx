'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(1, false);
    }
  }, [carouselRef]);


  return (
    <Carousel
      ref={carouselRef}
      swipeable={true}
      responsive={responsive}
      infinite={false}
      centerMode={true}
      itemClass="px-2"
      arrows={false}
      showDots={false}
      afterChange={(_, { currentSlide }) => setCurrentIndex(currentSlide)}
    >
      {plans.map((plan, index) => (
        <Plan {...plan} key={index} className={index !== currentIndex ? 'bg-zinc-800' : ''} />
      ))}
    </Carousel>
  );
};
