import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ques } from "../assets";

const faqs = [
  {
    question: "How soon do I get my payments?",
    answer:
      "You can choose between T+1, T+2, or instant settlements based on your business needs.",
  },
  {
    question: "Is it safe to use your gateway?",
    answer:
      "Absolutely. We’re PCI-DSS compliant, encrypted end-to-end, and monitored 24/7.",
  },
  {
    question: "Can I integrate it with my mobile app?",
    answer:
      "Yes, we offer iOS, Android SDKs and REST APIs for full flexibility.",
  },
  {
    question: "Do you offer refunds & chargeback handling?",
    answer:
      "Yes, our dashboard enables quick refunds and we assist with chargeback resolutions.",
  },
];

const FAQ = () => {
  // Controls for the fade/slide up animation
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  // Floating animation for the image (continuous up and down)
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="bg-gray-50 py-10 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side FAQs */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="bg-white rounded-lg shadow-sm">
                    <Disclosure.Button className="flex w-full justify-between items-center px-4 py-3 text-left text-gray-900 font-medium hover:bg-gray-100 transition">
                      <span>{faq.question}</span>
                      <ChevronUpIcon
                        className={`w-5 h-5 transition-transform ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </Disclosure.Button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>

        {/* Right side floating image */}
        <motion.div
          animate={floatingAnimation}
          className="rounded overflow-hidden"
          style={{ willChange: "transform" }}
        >
          <img
            src={ques}
            alt="FAQ illustration"
            className="w-full h-auto rounded-md shadow-md"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQ;
