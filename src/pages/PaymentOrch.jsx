import React from 'react'
import { TopHeader } from '../components'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { auto, ease } from '../assets'

const PaymentOrch = () => {
  return (
    <div>
      <TopHeader text="Payment Orchestration" subText="The Power of Payment Orchestration" />

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Streamline Your Payments with Payment Orchestration
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Payment Orchestration centralizes and automates your payment processes, 
              from accepting payments (Pay IN) to making disbursements (Pay OUT). 
              It offers flexibility, security, and efficiency to businesses looking to scale.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With intelligent routing, real-time reporting, and multi-method support, 
              Payment Orchestration helps reduce transaction failures, optimize 
              payment flows, and improve customer satisfaction.
            </p>

            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-all">
              Learn More
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center transition-transform transform hover:scale-105 duration-300">
            <img
              src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d4" // Replace with your image
              alt="Payment orchestration"
              className="rounded-xl shadow-xl object-cover max-h-[400px] transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Key Benefits of Payment Orchestration
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="text-center p-6 bg-gradient-to-r from-pink-100 via-transparent to-pink-200 rounded-lg shadow-lg hover:bg-pink-50 transition-alll">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Multi-Rail Support</h4>
            <p className="text-gray-600">Accept payments from credit cards, UPI, wallets, and more—all through one integration.</p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 bg-gradient-to-r from-pink-100 via-transparent to-pink-200 rounded-lg shadow-lg hover:bg-pink-50 transition-all">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Routing</h4>
            <p className="text-gray-600">Reduce payment failures with dynamic routing and real-time transaction rerouting.</p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 bg-gradient-to-r from-pink-100 via-transparent to-pink-200 rounded-lg shadow-lg hover:bg-pink-50 transition-all">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Analytics</h4>
            <p className="text-gray-600">Track payments and disbursements in real-time with an intuitive dashboard and detailed reports.</p>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="py-16 px-6 bg-pink-100">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900">How Payment Orchestration Works</h3>
          <p className="text-lg text-gray-600 mt-4">
            Easily integrate with multiple payment gateways, and let our orchestration system take care of the rest.
          </p>
        </div>

        {/* Animated Timeline or Image Sequence */}
        <div className="flex flex-col md:flex-row justify-center gap-8 ">
          <div className="flex justify-center items-center space-x-6">
            <img
              src={ease} // Replace with your image
              alt="Step 1"
              className="rounded-lg shadow-xl max-w-xs transform hover:scale-105 transition-all duration-500"
            />
            <p className="text-gray-700 text-lg">Step 1: Collect Payments with Ease</p>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <img
              src={auto}// Replace with your image
              alt="Step 2"
              className="rounded-lg shadow-xl max-w-xs transform hover:scale-105 transition-all duration-500"
            />
            <p className="text-gray-700 text-lg">Step 2: Automate Payouts Seamlessly</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaymentOrch
