import React from 'react'
import { TopHeader } from '../components'
import { pay } from '../assets'

const PayIn = () => {
    return (
        <div>
            <TopHeader text="Pay In" subText='Fast, secure UPI and wallet payments for web, app, and eCommerce.' />
            <div className="max-w-6xl mx-auto mb-10 px-4">
                <div className="sparkle-border rounded-xl p-[2px] bg-pink-100">
                    <div className="bg-pink-100 rounded-xl p-6 md:p-10 text-center relative z-10">
                        <h4 className="text-pink-500 font-semibold text-4xl md:text-7xl mb-4">
                            Pay In
                        </h4>
                        <p className="text-gray-600 text-2xl md:text-2xl max-w-4xl mx-auto">
                            Mailler’s Pay In solution enables your business to seamlessly collect payments through popular methods like UPI and digital wallets. Designed for websites, mobile apps, and eCommerce platforms, it ensures lightning-fast transactions, bank-grade security, and maximum reliability — so your customers enjoy a smooth checkout experience every time.
                        </p>
                    </div>
                </div>
            </div>

            <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:py-24 max-w-7xl mx-auto">
                {/* Left Image or Illustration */}
                <div className="md:w-1/2 w-full">
                    <img
                        src={pay}// Replace with your image path
                        alt="Product Tour Illustration"
                        className="w-full h-auto"
                    />
                </div>

                {/* Right Content */}
                <div className="md:w-1/2 w-full mb-10 md:mb-0 md:pl-12 text-center md:text-left">
                    <p className="text-pink-500 font-semibold mb-2">The Power of Pay IN</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Unlock Seamless Payments with Pay IN
                    </h2>
                    <p className="mt-6 text-gray-600 text-lg">
                        Discover the strength of smart, secure, and instant payments with Pay IN—your gateway to effortless transactions. Whether you're collecting payments from customers, managing subscriptions, or settling invoices, Pay IN makes it easy.
                        <br/>
                       <p className='text-2xl mt-2 mb-2 '> 🚀 Why Choose Pay IN?</p>
                        
                        Instant Settlements – Get paid in real-time.<br/>
                        Trusted Security – Industry-grade encryption and fraud protection.<br/>

                        Simple Integration – Start accepting payments in minutes.<br/>

                        Customizable Workflows – Tailored for your business needs.
                    </p>
                
                </div>
            </section>

        </div>
    )
}

export default PayIn
