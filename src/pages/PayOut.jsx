import React from 'react'
import { TopHeader } from '../components'

const PayIn = () => {
    return (
        <>
            <TopHeader text="Pay Out" subText='Automate payouts, refunds, and transfers to banks or wallets — instantly and effortlessly' />
            <div className="max-w-6xl mx-auto mb-10 px-4">
                <div className="sparkle-border rounded-xl p-[2px] bg-pink-100">
                    <div className="bg-pink-100 rounded-xl p-6 md:p-10 text-center relative z-10">
                        <h4 className="text-pink-500 font-semibold text-4xl md:text-7xl mb-4">
                            Pay Out
                        </h4>
                        <p className="text-gray-600 text-2xl md:text-2xl max-w-4xl mx-auto">
                            Mailler’s Pay Out solution simplifies and automates bulk payments like vendor payouts, refunds, commissions, and more. Send funds directly to bank accounts or digital wallets with real-time speed, high security, and complete control. Whether it's one transaction or thousands, Mailler ensures your disbursements are smooth, scalable, and seamless — anytime, anywhere.
                        </p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default PayIn
