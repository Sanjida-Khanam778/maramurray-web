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

let hasSeenPreloader = false;

export default function Home() {
  const [loading, setLoading] = useState(!hasSeenPreloader);

  useEffect(() => {
    if (loading) {
      // Hide preloader after 4.5 seconds
      const timer = setTimeout(() => {
        setLoading(false);
        hasSeenPreloader = true;
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-screen flex items-center justify-center">
          <Lottie animationData={preloaderAnimation} loop={true} className="w-screen" />
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