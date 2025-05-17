import {
  FaEnvelope,
  FaMailBulk,
  FaSitemap,
  FaTasks,
  FaNewspaper,
  FaUsers,
} from "react-icons/fa";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: FaEnvelope,
    title: "All-In-One Platform",
    description:
      "Accept cards, UPI, wallets, net banking, EMI, subscriptions & more.",
  },
  {
    icon: FaMailBulk,
    title: "Bank-Level Security",
    description:
      "PCI DSS Level 1 compliance with real-time fraud monitoring.",
  },
  {
    icon: FaSitemap,
    title: "Fast Settlements",
    description:
      "Receive your payments quickly with next-day or instant settlement options.",
  },
  {
    icon: FaTasks,
    title: "Easy Integration",
    description:
      "Developer-friendly APIs, SDKs, and plugins for websites, apps & POS.",
  },
  {
    icon: FaTasks,
    title: "Real-Time Dashboard",
    description:
      "Monitor transactions, analyze revenue, and manage refunds from one clean interface.",
  },
  {
    icon: FaTasks,
    title: "24/7 Customer Support",
    description: "We are ready to help & support customers all the time.",
  },
];

const howItWorks = [
  {
    icon: FaNewspaper,
    title: "Sign Up",
    description: "Create an account in minutes. No paperwork, no hassle.",
  },
  {
    icon: FaUsers,
    title: "Integrate",
    description:
      "Use our SDKs, APIs, or plug-ins with full developer documentation.",
  },
  {
    icon: FaUsers,
    title: "Go Live",
    description: "Start accepting payments securely across all channels.",
  },
];

const Feature = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const animationProps = {
    initial: { opacity: 0, y: 50 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="py-8 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h4 className="text-blue-900  text-2xl font-semibold">Our Feature</h4>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Important Features For Choose Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choosing the right payment partner can make or break your business
          growth. Here's why businesses trust us:
        </p>
      </div>

      <Tab.Group>
        <Tab.List className="flex justify-center space-x-4 mb-8">
          <Tab
            className={({ selected }) =>
              clsx(
                "px-5 py-2 text-sm font-medium rounded-full transition",
                selected
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )
            }
          >
            Features
          </Tab>
          <Tab
            className={({ selected }) =>
              clsx(
                "px-5 py-2 text-sm font-medium rounded-full transition",
                selected
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )
            }
          >
            How It Works
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div
              ref={ref}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  {...animationProps}
                  className="bg-gray-50 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition"
                >
                  <div className="inline-block bg-white p-4 rounded-full mb-4">
                    <item.icon size={50} className="text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mt-3">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div
              ref={ref}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {howItWorks.map((step, idx) => (
                <motion.div
                  key={idx}
                  {...animationProps}
                  className="flex items-start p-4 rounded-md bg-gray-50 shadow-sm hover:shadow-md transition"
                >
                  <step.icon
                    size={40}
                    className="text-blue-900 flex-shrink-0"
                  />
                  <div className="ml-4 text-left">
                    <h4 className="text-lg font-semibold">{step.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Feature;
