import { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaShare,
} from "react-icons/fa";
import { TopHeader } from "../components";

const Contact = () => {
  
    
     
  return (
     <>
      <TopHeader text="Contact Us" subText="Welcome to Pavoyaa - Let's get you started"/>
    <div className="bg-white py-20">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h4 className="text-blue-600 mb-2 text-lg font-semibold"></h4>
      <h1 className="text-4xl text-blue-900 font-bold mb-4">Get In Touch With Us</h1>
      <p className="text-gray-600">
        Connect with our team for support, collaboration, or to learn more about how Pavoyaa can help your business.
      </p>
    </div>

    <div className="flex flex-col items-center justify-center px-4 lg:px-20 lg:flex-row gap-12">
    <div className="w-full lg:w-1/2 space-y-6">
        {[{ icon: <FaHome />, title: "Address", text: "123 ranking Street, New York, USA" },
          { icon: <FaMapMarkerAlt />, title: "Office", text: "123 ranking Street, New York, USA" },
          { icon: <FaPhoneAlt />, title: "Mobile", text: "+012 345 67890" },
          { icon: <FaEnvelopeOpen />, title: "Email", text: "info@example.com" }]
          .map((item, idx) => (
            <div key={idx} className="flex items-center justify-start gap-4">
              <div className="bg-gray-100 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-full flex items-center justify-center text-blue-900 text-2xl sm:text-3xl">
                {item.icon}
              </div>
              <div className="ml-6">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}

        {/* Social Icons */}
        <div className="flex items-center justify-start gap-4">
          <div className="bg-gray-100 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-full flex items-center justify-center text-blue-900 text-2xl sm:text-3xl">
            <FaShare />
          </div>
          <div className="ml-6 flex space-x-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-blue-900 text-white rounded-full hover:bg-pink-700 transition">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="w-full lg:w-1/2">
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <input type="tel" placeholder="Your Phone" className="form-input" />
            <input type="text" placeholder="Your Project" className="form-input" />
          </div>
          <input type="text" placeholder="Subject" className="form-input w-full" />
          <textarea rows="6" placeholder="Message" className="form-input w-full"></textarea>
          <button className="bg-blue-900 hover:bg-blue-700 text-white py-3 px-6 rounded w-full cursor-pointer">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      
    </div>

    {/* Map Section */}
    {/* <div className="mt-16 rounded overflow-hidden">
      <iframe
        className="w-full h-[500px] rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </div> */}
  </div>
</div>



     </>
  );
};

export default Contact;
