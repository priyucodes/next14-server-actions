import Link from "next/link";
import React from "react";
import styles from "./card.module.css";

import { cp } from "fs";
import { title } from "process";
type Car = {
  car: {
    id: number;
    title: string;
    km: number;
    marketPrice: number;
    sellingPrice: number;
    imgURL: string;
  };
};
const Card = ({ car }: Car) => {
  console.log(car);
  return (
    <div className={styles.cardContainer}>
      <div key={car.id} className={styles.card}>
        <div className={styles.cardContent}>
          <img src={car.imgURL || ""} className={styles.cardImage} />
          <div className={styles.cardDetails}>
            <h2 className={styles.cardTitle}>{car.title}</h2>
            <p className={styles.cardKm}>{`${car.km || "0"} KM`}</p>
            <p className={styles.cardMarketPrice}>{`$${car.marketPrice} ${
              car.sellingPrice < car.marketPrice ? "Below market" : ""
            }`}</p>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <p className={styles.cardPrice}>{`$${car.sellingPrice}`}</p>
          <Link
            href={`/cars/${car.id}`}
            target='_blank'
            className={styles.cardLink}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
