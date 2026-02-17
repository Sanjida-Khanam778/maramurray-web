import { PiAndroidLogo } from 'react-icons/pi';
import journey from '../../assets/images/journey.png';
import leaf2 from '../../assets/images/leaf2.png';
import { FaAndroid, FaApple } from 'react-icons/fa';
export default function CTADownload() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-[#DAD7CD]/20 rounded-2xl p-10 relative">
        <img src={leaf2} className='absolute -top-20 -left-32 z-10' alt="" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Start Your Garden Journey Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Download GardenApp and turn your dream outdoor space into a reality. No experience required.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition flex items-center justify-center gap-4">
                <FaApple className='text-2xl' />
                <div className='flex flex-col items-start'>
                  <span className="uppercase text-sm leading-none">Download on the</span>
                  <span className="text-2xl leading-none font-semibold">App Store</span>
                </div>
              </button>
              <button className="bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition flex items-center justify-center gap-4">
                <FaAndroid className='text-2xl' />
                <div className='flex flex-col items-start'>
                  <span className="uppercase text-sm leading-none">Get it on</span>
                  <span className="text-2xl leading-none font-semibold">Google Play</span>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 text-[#00A63E]">
              <div className="flex items-center gap-3">
                <span className="text-xl">★</span>
                <div>
                  <p className="font-semibold">4.8/5 Rating</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">●</span>
                <div>
                  <p className="font-semibold">10,000+ Active Users</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">✓</span>
                <div>
                  <p className="font-semibold">Free to Start</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Placeholder for phone mockups */}
          <div className="hidden md:flex justify-center items-center">
            <img src={journey} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
