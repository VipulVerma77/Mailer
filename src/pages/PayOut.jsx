import { TopHeader } from '../components'
import { pay } from '../assets'

const PayIn = () => {
    return (
        <>
            <TopHeader text="Pay Out" subText='Automate payouts, refunds, and transfers to banks or wallets — instantly and effortlessly' />
            <div className="max-w-6xl mx-auto mb-10 px-4">
                <div className="sparkle-border rounded-xl p-[2px] bg-blue-200">
                    <div className="bg-blue-200 rounded-xl p-6 md:p-10 text-center relative z-10">
                        <h4 className="text-blue-900 font-semibold text-4xl md:text-7xl mb-4">
                            Pay Out
                        </h4>
                        <p className="text-gray-600 text-2xl md:text-2xl max-w-4xl mx-auto">
                            Pavoyaa’s Pay Out solution simplifies and automates bulk payments like vendor payouts, refunds, commissions, and more. Send funds directly to bank accounts or digital wallets with real-time speed, high security, and complete control. Whether it's one transaction or thousands, Pavoyaa ensures your disbursements are smooth, scalable, and seamless — anytime, anywhere.
                        </p>
                    </div>
                </div>
            </div>
            <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:py-24 max-w-7xl mx-auto">
                {/* Left Image or Illustration */}


                {/* Right Content */}
                <div className="md:w-1/2 w-full mb-10 md:mb-0 md:pl-12 text-center md:text-left">
                    <p className="text-red-900 font-semibold mb-2">The Power of Pay OUT</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
                        Disburse Funds Like a Pro with Pay OUT
                    </h2>
                    <p className="mt-6 text-gray-600 text-lg">
                        Say goodbye to manual transfers and payment delays. With Pay OUT, you can distribute funds effortlessly—whether you're paying vendors, refunding customers, or managing bulk payouts.
                        <br />
                        <p className='text-3xl mt-2 mb-2 text-blue-800 '> Why Choose Pay OUT?</p>

                        Fast Transfers – Disburse funds instantly to any bank or wallet.<br />
                        Bulk Payouts – Handle thousands of transactions in a click.<br />

                        Detailed Tracking – Full visibility into every payout.<br />
                        Automated Workflows – Save time with scheduled or triggered payouts.
                    </p>

                </div>
                <div className="md:w-1/2 w-full">
                    <img
                        src={pay}// Replace with your image path
                        alt="Product Tour Illustration"
                        className="w-full h-auto"
                    />
                </div>
            </section>


        </>
    )
}

export default PayIn
