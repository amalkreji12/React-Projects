import React from "react";
import { offer } from "../../assets/images";
import Button from "../Button/Button";
import { arrowRight } from "../../assets/icons";

const SpecialOffers = () => {
  return (
    <section className="flex justify-center items-center max:lg:flex-col-reverse gap-10 max-container">
      <div className="fkex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <br />
          <span className="text-coral-red">Special </span>
          Offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          aperiam dolorem illum. Dicta accusamus laborum .
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our Quality is our first priority.Our Quality is our first
          priority.Our Quality is our first priority.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
