import React from 'react';
import aboutBG from '../../assets/images/aboutBG.png';
import quotation from '../../assets/images/quotation.png';
import leaf4 from '../../assets/images/leaf4.png';
import leaf5 from '../../assets/images/leaf5.png';
import { Leaf, Users, ShieldCheck, Heart, GraduationCap, Lightbulb, CircleCheckBig } from 'lucide-react';
import ChallengeSection from '../../components/ChallengeSection/ChallengeSection';
import { FaUsers } from 'react-icons/fa';
import { LiaCanadianMapleLeaf } from 'react-icons/lia';
import StatsBanner from '../../components/StatsBanner/StatsBanner';
import CTADownload from '../../components/CTADownload/CTADownload';

export default function About() {
    const values = [
        {
            title: "Sustainability First",
            description: "We prioritize native plants and water-wise designs to support local ecosystems.",
            icon: Leaf,
            color: "bg-green-100 text-green-600"
        },
        {
            title: "Education",
            description: "Building a network of green thumbs sharing seeds, tips, and inspiration.",
            icon: GraduationCap,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Community",
            description: "Our AI-powered designs are backed by horticultural insights to ensure your garden's success.",
            icon: FaUsers,
            color: "bg-amber-100 text-amber-600"
        },
        {
            title: "Innovation",
            description: "Leveraging cutting-edge AI to solve age-old landscaping headaches.",
            icon: Lightbulb,
            color: "bg-red-100 text-red-600"
        },
        {
            title: "Wellness",
            description: "Believing that time spent in nature improves mental and physical health.",
            icon: LiaCanadianMapleLeaf,
            color: "bg-amber-100 text-amber-600"
        },
        {
            title: "Transparency",
            description: "No hidden contractor fees. Clear pricing for plants and materials upfront.",
            icon: ShieldCheck,
            color: "bg-red-100 text-red-600"
        }
    ];

    return (
        <div className='font-bricolage bg-[#F8F8F8] min-h-screen font-bricolage'>
            {/* Hero Section */}
            <div
                className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${aboutBG})` }}
            >
                <div className="absolute inset-0 bg-white/50"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        We Believe <br /> Everyone Deserves a
                    </h1>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#3A5A40] mb-4">
                        Beautiful Garden
                    </h1>
                    <p className="text-xl md:text-2xl text-[#161616] max-w-3xl mx-auto font-medium">
                        Democratizing landscape design with AI, making professional gardens accessible, affordable, and sustainable for homeowners everywhere.                  </p>

                </div>
            </div>

            <ChallengeSection />

            {/* Call to Action */}
            <section className="text-center relative">
                <img src={leaf4} className='absolute z-10 left-0 top-0' alt="" />
                <div className="bg-gradient-to-l from-[#1F2D16] to-[#3A5A40] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
                    <img src={quotation} className='mx-auto mb-6' alt="" />
                    <p className="text-3xl xl:text-5xl text-white max-w-4xl mx-auto font-bold mb-8">
                        "Our mission is to reconnect people with
                        nature by removing the barriers to
                        creating beautiful, sustainable outdoor
                        living spaces."
                    </p>
                    <div className="flex items-center justify-center mb-10">
                        <div className=" h-px w-20 bg-[#A3B18A]"></div>

                        <span className="px-4 text-[#A3B18A] uppercase">
                            THE GARDENAPP TEAM
                        </span>

                        <div className="h-px w-20 bg-[#A3B18A]"></div>
                    </div>

                </div>
            </section>

         
            {/* Values Grid */}
            <section className="py-20 px-4 relative">
                <img src={leaf5} className='absolute z-10 right-0 top-10' alt="" />

                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-left text-[#1D2915] mb-16">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white hover:scale-105 transition-transform duration-300"
                            >
                                <div className={`text-[#3A5A40] rounded-2xl flex items-center mb-6`}>
                                    <value.icon size={28} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1D2915] mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
   <StatsBanner />
      <CTADownload />

        </div>
    );
}