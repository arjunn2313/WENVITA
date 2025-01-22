import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import demo2 from "../assets/demo3.avif";

const Billing = () => {
  return (
    <section id="demo" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={demo2}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Design Your Dream <br className="sm:block hidden" /> Wedding Website.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Create a personalized space for your special day. From beautiful
          designs to seamless RSVPs, we make wedding planning effortless and
          memorable. Share your love story, event details, and much more with a
          stunning wedding website tailored just for you." This combination
          conveys both the service and the ease of use, focusing on
          personalization and convenience. Let me know if you'd like any tweaks!
        </p>
        <button
          type="button"
          className={`py-4 mt-10 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
        >
         View Demo
        </button>
      </div>
    </section>
  );
};

export default Billing;
