import React from "react";
import { about, team, values } from "../assets";
import { CustomButton, Feature, TopHeader } from "../components";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, y: 100 }, // start 100px below
  visible: {
    opacity: 1,
    y: 0, // move to normal position
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


const AboutSection = () => {
  return (
    <>
      <TopHeader
        text="About Us"
        subText="Driving Innovation in the Future of Payments"
      />

      {/* Hero Section */}
      <div className="overflow-hidden py-10 mt-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <motion.div
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariant}
            >
              <div className="rotate-[-2deg] transition-transform hover:rotate-0">
                <img
                  src={about}
                  alt="About"
                  className="w-full h-auto rounded shadow-md"
                />
              </div>
            </motion.div>


            {/* Text */}
            <motion.div
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h4 className="text-blue-900 text-lg font-semibold mb-2">
                Who we are
              </h4>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Get Started Easily With a Personalized Product Tour
              </h1>
              <p className="text-gray-600 mb-6">
                We specialize in seamless and secure payment gateway solutions
                that support both Pay-In (customer to business) and Pay-Out
                (business to customer/vendor) transactions. Our mission is to
                enable fast, reliable, and scalable financial operations for
                businesses of all sizes.
              </p>
              <p className="text-gray-600">
                From intelligent routing to full-stack orchestration, our
                platform simplifies global payment complexities. Whether you're
                an enterprise or a growing startup, our solutions are designed
                for adaptability and future scalability.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <motion.div
        className="max-w-6xl mx-auto mb-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="border border-gray-200 rounded-xl p-6 md:p-10 text-center bg-blue-200">
          <h4 className="text-blue-900 font-semibold text-4xl md:text-7xl mb-4">
            Our Vision
          </h4>
          <p className="text-gray-600 text-2xl max-w-4xl mx-auto">
            To be the foremost payment orchestration platform, consistently
            delivering cutting-edge, secure, and seamless solutions for global
            transactions.
          </p>
        </div>
      </motion.div>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariant}
          >
            <img
              src={values}
              alt="Core Values"
              className="w-full rounded-xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Our Core Values
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>🔐 Security First – Every transaction is protected.</li>
              <li>🚀 Innovation – We're constantly evolving to stay ahead.</li>
              <li>🌎 Accessibility – We build for all sizes and scales.</li>
              <li>💡 Simplicity – Making the complex feel effortless.</li>
              <li>💼 Partnership – We grow only when our clients grow.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Feature Section */}
      <Feature />

      {/* Mission Highlight */}
      <motion.div
        className="max-w-6xl mx-auto mb-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="border border-gray-200 rounded-xl p-6 md:p-10 text-center bg-blue-200">
          <h4 className="text-blue-900 font-semibold text-4xl mb-4">
            Effortless Payments. Unlimited Growth.
          </h4>
          <p className="text-gray-600 text-2xl max-w-4xl mx-auto">
            Pavoyaa simplifies and secures your payment management, empowering
            your business to grow without boundaries. Our adaptable solutions
            are designed to meet your needs today and scale effortlessly with
            your ambitions for tomorrow.
          </p>
        </div>
      </motion.div>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Our Culture
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              We’re a passionate team of engineers, designers, and strategists
              working to transform how the world moves money. Collaboration,
              transparency, and continuous improvement are part of our DNA.
            </p>
            <p className="text-lg text-gray-700">
              From daily standups to global launches, our work is driven by
              purpose—and fun. Come innovate with us.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariant}
          >
            <img
              src={team}
              alt="Our Team"
              className="w-full rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
