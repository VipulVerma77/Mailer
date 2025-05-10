// components/TestimonialSection.jsx
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Abraham",
    location: "New York, USA",
    image: "/img/testimonial-img-1.jpg",
    feedback:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum.",
  },
  {
    id: 2,
    name: "John Abraham",
    location: "New York, USA",
    image: "/img/testimonial-img-2.jpg",
    feedback:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum.",
  },
  {
    id: 3,
    name: "John Abraham",
    location: "New York, USA",
    image: "/img/testimonial-img-3.jpg",
    feedback:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    customPaging: (i) => (
      <img
        src={testimonials[i].image}
        alt={`dot-${i}`}
        className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover"
      />
    ),
    dotsClass: "slick-dots custom-thumb",
  };

  return (
    <div className="bg-white py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h4 className="text-pink-500 font-semibold text-lg">Testimonial</h4>
          <h2 className="text-4xl font-bold mb-4">What Our Client Say About Us</h2>
          <p className="text-gray-600">
            Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime.
            Vel animi eveniet doloremque reiciendis soluta iste provident non
            rerum illum perferendis earum est architecto dolores vitae quia
            vero quod incidunt culpa corporis, porro doloribus.
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((item) => (
            <div key={item.id}>
              <div className="bg-gray-50 p-8 rounded-lg text-center max-w-2xl mx-auto shadow">
                <div className="flex items-center justify-center mb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-full border-4 border-pink-500 object-cover mr-4"
                  />
                  <div>
                    <h5 className="font-semibold text-lg">{item.name}</h5>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-5">{item.feedback}</p>
                <div className="flex justify-center text-pink-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
