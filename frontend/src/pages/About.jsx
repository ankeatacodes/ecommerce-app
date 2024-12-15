import React from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import NewsLetterBox from '../components/NewsLetterBox';
const About = () => {
  return (
    <div className="about-container">
      {/* Title Section */}
      <div className="text-2xl text-center pt-8 border-t">
      <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Content Section */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        {/* Image Section */}
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="About" />

        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
          Forever was born out of a passion for innovation and a desire to revolutionize.
At Forever, we believe in breaking boundaries and challenging norms to create unique solutions that cater to modern lifestyles. From the very beginning, our journey has been fueled by a deep commitment to innovation, creativity, and excellence.

Since our inception, we've worked tirelessly to curate a diverse selection.
Our team meticulously researches and handpicks products that combine quality, functionality, and style. Each item in our collection reflects our dedication to providing only the best to our customers. We take pride in offering options that are not just diverse but also cater to various preferences and needs, ensuring something for everyone.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse selection.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
          Our mission at Forever is to empower customers with choice, convenience, and quality. We aim to simplify your shopping experience by blending modern technology with a personalized touch. Whether you're exploring the latest trends or searching for everyday essentials, Forever is your trusted partner in finding what you need, when you need it.
          </p>
        </div>
      </div>

      {/* Subtitle Section */}
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>


      {/* Additional Information (Optional) */}
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">We meticulously select and vet each product to ensure the highest quality.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">With our user-friendly interface and hassle-free experience, we make shopping easy.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Our team of dedicated professionals is here to assist you at every step.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
