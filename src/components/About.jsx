import { motion } from "framer-motion";
import { about } from "../assets";
import CustomButton from "./CustomButton";

export default function About() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:py-10 max-w-7xl mx-auto">

      {/* Left: Floating Image */}
      <motion.div
        className="md:w-1/2 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={about}
          alt="Product Tour Illustration"
          className="w-full h-auto animate-float"
        />
      </motion.div>

      {/* Right: Slide In From Bottom */}
      <motion.div
        className="md:w-1/2 w-full mb-10 md:mb-0 md:pl-12 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-blue-900 text-2xl font-semibold mb-2">About Us</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Powering the Future of Digital Payments
        </h2>
        <p className="mt-6 text-gray-600 text-lg">
          At [Your Company Name], we’re on a mission to simplify, secure, and supercharge the way businesses accept payments in today’s digital-first world. Founded with a vision to empower merchants of all sizes—from startups to enterprises—we provide a robust, developer-friendly payment infrastructure that adapts to the way you grow.
          Whether you're running an eCommerce store, mobile app, subscription platform, or retail outlet, our solutions are built to handle scale, speed, and security—all without friction.
        </p>
        <CustomButton
          to="/about"
          label="Read More"
          variant="outline"
          size="medium"
          className="rounded-full mt-2"
        />
      </motion.div>
    </section>
  );
}
