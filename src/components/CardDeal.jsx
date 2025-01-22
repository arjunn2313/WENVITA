import React from "react";
import { card } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";
import demo1 from "../assets/demo 1.webp";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Create Your Perfect <br className="sm:block hidden" />
          Wedding Website.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Design a personalized wedding website that reflects your unique love
          story. From guest lists to RSVP management, we provide everything you
          need to plan and share your special day effortlessly.
        </p>
        <button
          type="button"
          className={`py-4 mt-10 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
        >
         View Demo
        </button>
      </div>
      <div className={layout.sectionImg}>
        <img src={demo1} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
