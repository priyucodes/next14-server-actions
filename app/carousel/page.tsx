"use client";
import Card from "@/components/Card/card";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
type Car = {
  id: number;
  title: string;
  km: number;
  marketPrice: number;
  sellingPrice: number;
  imgURL: string;
};

// const cars: Car[] = [

//   {
//     id: 1,
//     title: "2023 Tesla Model S",
//     km: 15000,
//     marketPrice: 79999,
//     sellingPrice: 75999,
//     imgURL:
//       "https://cdn.motor1.com/images/mgl/Mk3qg6/s3/2017-tesla-roadster-deck-model-petersen-automotive-museum.jpghttps://cdn.motor1.com/images/mgl/Mk3qg6/s3/2017-tesla-roadster-deck-model-petersen-automotive-museum.jpg",
//   },
//   {
//     id: 2,
//     title: "2021 BMW X5",
//     km: 25000,
//     marketPrice: 69999,
//     sellingPrice: 67999,
//     imgURL:
//       "https://imgd.aeplcdn.com/664x374/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
//   },
//   {
//     id: 3,
//     title: "2020 Audi A4",
//     km: 35000,
//     marketPrice: 39999,
//     sellingPrice: 38999,
//     imgURL:
//       "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8wc/2023.png?wid=550",
//   },
//   {
//     id: 4,
//     title: "2022 Mercedes-Benz C-Class",
//     km: 12000,
//     marketPrice: 49999,
//     sellingPrice: 48999,
//     imgURL:
//       "https://imgd.aeplcdn.com/664x374/n/cw/ec/178535/c-class-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
//   },
//   {
//     id: 5,
//     title: "2019 Ford Mustang",
//     km: 45000,
//     marketPrice: 35999,
//     sellingPrice: 34999,
//     imgURL:
//       "https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Right-Front-Three-Quarter-74317.jpg?v=201711021421&q=80",
//   },
// ];

const generateCars = (numCars: number): Car[] => {
  const carData: Car[] = [];
  const titles = [
    "Tesla Model S",
    "BMW X5",
    "Audi A4",
    "Mercedes-Benz C-Clas",
    "Ford Mustang",
  ];
  const kmValues = [15000, 25000, 35000, 12000, 45000];
  const marketPrices = [79999, 69999, 39999, 49999, 35999];
  const sellingPrices = [75999, 67999, 38999, 48999, 34999];
  const imgURLs = [
    "https://cdn.motor1.com/images/mgl/Mk3qg6/s3/2017-tesla-roadster-deck-model-petersen-automotive-museum.jpg",
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/152681/x5-exterior-right-front-three-quarter-5.jpeg",
    "https://images.carandbike.com/car-images/colors/audi/a4/audi-a4-terra-gray-metallic.jpg?v=1641538531",
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/178535/c-class-exterior-right-front-three-quarter.jpeg",
    "https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Right-Front-Three-Quarter-74317.jpg?v=201711021421",
  ];

  for (let i = 0; i < numCars; i++) {
    carData.push({
      id: i + 1,
      title: titles[i % titles.length],
      km: kmValues[i % kmValues.length],
      marketPrice: marketPrices[i % marketPrices.length],
      sellingPrice: sellingPrices[i % sellingPrices.length],
      imgURL: imgURLs[i % imgURLs.length],
    });
  }

  return carData;
};

const cars = generateCars(10); // Adjust the number as needed
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,

    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      style={{
        minWidth: 0,
        minHeight: 0,
        padding: "1rem",
        boxSizing: "border-box",
      }}
      //   slider container class contains this style
      className='slider-container'
    >
      <Slider {...settings}>
        {cars.map(car => {
          return <Card key={car.id} car={car} />;
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
