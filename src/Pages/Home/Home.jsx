import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import preloaderAnimation from '../../../public/florlejsonloitte.json'
import Banner from '../../components/Banner/Banner'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import ChooseYourPath from '../../components/ChooseYourPath/ChooseYourPath'
import CTADownload from '../../components/CTADownload/CTADownload'
import GardenTips from '../../components/GardenTips/GardenTips'
import MonthlyTip from '../../components/MonthlyTip/MonthlyTip'
import GetInspiredSection from '../../components/GetInspiredSection/GetInspiredSection'
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection'
import VideoTutorialSection from '../../components/VideoTutorialSection/VideoTutorialSection'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8F8F8]">
        <div className="w-screen flex items-center justify-center">
          <Lottie animationData={preloaderAnimation} loop={true} className="w-full h-full object-cover" />
        </div>
      </div>
    );
  }

  return (
    <div className='font-bricolage bg-[#F8F8F8]'>
      <Banner />
      <HowItWorks />
      <ChooseYourPath />
      <CTADownload />
      <GardenTips />
      <MonthlyTip />
      <GetInspiredSection />
      <TestimonialsSection />
      <VideoTutorialSection />
    </div>
  )
}