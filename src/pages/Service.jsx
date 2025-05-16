import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useState } from 'react';
import { FaMailBulk, FaThumbsUp } from 'react-icons/fa';
import { CustomButton } from '../components';

const services = [
  {
    title: 'Pay In',
    icon: <FaMailBulk className="text-blue-900 text-5xl" />,
    description:
      'Enable your business to receive payments through UPI and wallets with lightning-fast and top-tier security. Perfect for websites, apps, and eCommerce platforms.',
  },
  {
    title: 'Pay Out',
    icon: <FaThumbsUp className="text-blue-900 text-5xl" />,
    description:
      'Automate bulk transfers, vendor payouts, refunds, commissions, and more—directly to bank accounts or wallets, anytime, anywhere instantly.',
  },
];

export default function Service() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-blue-900 font-semibold mb-2">Our Service</h4>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Can Do For You</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We simplify the way businesses collect and disburse money—securely, efficiently, and at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-center rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gray-100 rounded-full  p-6 inline-block mb-4">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <CustomButton
                    to={service.title === "Pay In" ? '/payin':'/payout'}
                    label="Read More"
                    variant="outline"
                    size="medium"
                    className="rounded-full"
                  />
              {/* <button
                onClick={() => setIsOpen(true)}
                className="text-primary border border-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition"
              >
                Read More
              </button> */}
            </div>
          ))}
        </div>

        {/* Headless UI Dialog example */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Service Details
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        This is an example of a modal using Headless UI. You can display more detailed content here.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none"
                        onClick={() => setIsOpen(false)}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </section>
  );
}
