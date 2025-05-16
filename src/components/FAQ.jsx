import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { about, ques } from "../assets";

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
  return (
    <div className="bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
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
                    <Disclosure.Panel className="px-4 pb-4 text-gray-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>

        <div className="rounded overflow-hidden">
          <img
            src={ques}
            alt="FAQ illustration"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
