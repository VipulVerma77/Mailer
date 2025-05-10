import React from "react";
import { about } from "../assets";
import { CustomButton, Feature, TopHeader } from "../components";

const AboutSection = () => {
  return (
    <>
        <TopHeader text="About Us" subText="Driving Innovation in the Future of Payments"/>
        <div className="overflow-hidden py-20 mt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div
            className="w-full lg:w-1/2 animate-fadeInUp"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            <div className="rotate-[-2deg] transition-transform hover:rotate-0">
              <img
                src={about}
                alt="About"
                className="w-full h-auto rounded shadow-md"
              />
            </div>
          </div>

          {/* Text Section */}
          <div
            className="w-full lg:w-1/2 animate-fadeInUp"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <h4 className="text-pink-600 text-lg font-semibold mb-2">Who we are</h4>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get Started Easily With a Personalized Product Tour
            </h1>
            <p className="text-gray-600 mb-6">
           We specialize in seamless and secure payment gateway solutions that support both Pay-In (customer to business) and Pay-Out (business to customer/vendor) transactions. Our mission is to enable fast, reliable, and scalable financial operations for businesses of all sizes.
            </p>
           {/* <CustomButton label="Read More"/> */}
          </div>
        </div>
      </div>
    </div>
       <div className="max-w-6xl mx-auto mb-10 px-4">
      <div className="border border-gray-200 rounded-xl p-6 md:p-10 text-center bg-pink-100">
        <h4 className="text-pink-500 font-semibold text-4xl md:text-7xl mb-4">
          Our Vision
        </h4>
        {/* <h1 className="text-2xl md:text-5xl font-medium mb-4">
          Important Features For Choose Us
        </h1> */}
        <p className="text-gray-600 text-2xl md:text-2xl max-w-4xl mx-auto">
          To be the foremost payment orchestration platform, consistently delivering cutting-edge, secure, and seamless solutions for global transactions.
        </p>
      </div>
    </div>
    <Feature/>
       <div className="max-w-6xl mx-auto mb-10 px-4">
      <div className="border border-gray-200 rounded-xl p-6 md:p-10 text-center bg-pink-100">
        <h4 className="text-pink-500 font-semibold text-4xl md:text-4xl mb-4">
          Effortless Payments. Unlimited Growth.
        </h4>
        {/* <h1 className="text-2xl md:text-5xl font-medium mb-4">
          Important Features For Choose Us
        </h1> */}
        <p className="text-gray-600 text-2xl md:text-2xl max-w-4xl mx-auto">
          Mailler simplifies and secures your payment management, empowering your business to grow without boundaries.
     Our adaptable solutions are designed to meet your needs today and scale effortlessly with your ambitions for tomorrow.
        </p>
      </div>
    </div>
    </>
  );
};

export default AboutSection;
