import { ContainerDots, ContainerImg, Dot, Wrapper } from './Slider.styled';
import React, { useState } from 'react';
import BtnSlider from './BtnSlider';
import { v4 as uuidv4 } from 'uuid';

const dataSlider = [
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: require(`../../image/Ukraine1.jpg`),
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: require(`../../image/Ukraine2.jpg`),
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: require(`../../image/Ukraine3.jpg`),
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: require(`../../image/Ukraine4.jpg`),
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: require(`../../image/Ukraine5.jpg`),
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: require(`../../image/Ukraine6.jpg`),
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: require(`../../image/Ukraine7t.jpg`),
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: require(`../../image/Ukraine8.jpg`),
  },
];

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <Wrapper>
      {dataSlider.map((obj, index) => {
        return slideIndex === index + 1 ? (
          <ContainerImg anime={true} key={obj.id}>
            <img src={obj.img} alt={obj.title + obj.img} />
          </ContainerImg>
        ) : (
          <ContainerImg anime={false} key={obj.id}>
            <img src={obj.img} alt={obj.title + obj.img} />
          </ContainerImg>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'prev'} />
      <BtnSlider moveSlide={prevSlide} direction={'next'} />

      <ContainerDots>
        {dataSlider.map((item, index) => (
          <Dot
            key={item.img}
            onClick={() => moveDot(index + 1)}
            dot={slideIndex === index + 1}
          ></Dot>
        ))}
      </ContainerDots>
    </Wrapper>
  );
};
