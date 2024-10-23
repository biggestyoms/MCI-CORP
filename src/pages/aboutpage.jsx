import React, {useEffect} from 'react';
// import ceoImage from './images/ceo-image.jpg';  // Replace with the actual image path
import AOS from "aos";
import "aos/dist/aos.css";
const Aboutpage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <div className="container max-w-6xl mx-auto px-4 text-center" data-aos= "fade-in-out" >
        <h1 className="text-4xl font-semibold text-white mb-8">
          About the CEO of MCI Corp
        </h1>

        {/* CEO image */}
        <div className="mb-8">
          <img
            // src={ceoImage}
            alt="CEO of MCI Corp"
            className="w-48 h-48 rounded-full mx-auto border-4 border-gray-300 shadow-lg"
          />
        </div>

        {/* CEO Description */}
        <p className="text-lg text-white mb-4">
  <span className="font-semibold text-white">Jang Panag</span> is a visionary with a passion for making things happen. Always ahead of his time, his creative solutions have consistently supported small businesses and their unique needs. From humble beginnings, Jang has worked his way up, driven by his deep love for Brantford a city he knows like the back of his hand and proudly calls home.
</p>
<p className="text-lg text-white">
  An avid marathon runner, Jang’s endurance and dedication shine through in all aspects of his life. Before his success in construction, he built his career in textile manufacturing, which inspired the name MCI Marathon Cotton Incorporated.
</p>
      </div>
    </div>
  );
};

export default Aboutpage;
