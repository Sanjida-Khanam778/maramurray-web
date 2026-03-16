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