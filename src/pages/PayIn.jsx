import React from 'react'
import { TopHeader } from '../components'

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

        </div>
    )
}

export default PayIn
