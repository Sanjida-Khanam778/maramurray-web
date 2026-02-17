import React from 'react';
import bg7 from '../../assets/images/bg7.png';

export default function TermsConditions() {
    const sections = [
        {
            title: "1. Service Usage",
            content: "By using GardenApp, you agree to use our AI-powered design tools for personal, non-commercial gardening purposes. You are responsible for ensuring your projects comply with local zoning and environmental regulations."
        },
        {
            title: "2. AI Recommendations Disclaimer",
            content: "Our AI-generated garden designs and plant suggestions are based on general horticultural data. We recommend verifying specific plant needs with a local nursery or expert before starting any major landscaping project."
        },
        {
            title: "3. User Conduct",
            content: "You agree not to upload harmful content, scrape our database, or attempt to reverse-engineer our design algorithms. We reserve the right to suspend accounts that violate these guidelines."
        },
        {
            title: "4. Intellectual Property",
            content: "While you own the physical garden you build, the digital designs, algorithms, and interface of GardenApp remain our exclusive property. You may not reproduce or resell our digital assets."
        },
        {
            title: "5. Account Responsibility",
            content: "You are responsible for safeguarding your account access and for any activity that occurs under your credentials. Please notify us immediately if you suspect any unauthorized use of your account."
        }
    ];

    return (
        <div className="w-full bg-[#F8F8F8] min-h-screen py-20 pt-40 px-4 sm:px-6 lg:px-8 relative font-rubik">
            {/* Background Decoration */}

            <img src={bg7} alt="" className="absolute top-40 left-0" />
            <div className="max-w-4xl mx-auto relative z-10">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#1F2D16] text-center mb-16 underline decoration-transparent">
                    Terms & Condition
                </h1>

                <div className="space-y-8 text-gray-700">
               

                    <p className="leading-relaxed">
                        Welcome to GardenApp. These terms and conditions govern your use of our platform, including our AI design tools
                        and plant identification services. By accessing GardenApp, you agree to be bound by these terms.
                        We encourage you to read them carefully as they describe your rights and responsibilities as a member of our growing community.
                    </p>

                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="text-lg font-bold text-[#1F2D16]">
                                    {section.title}
                                </h3>
                                <div className="flex gap-4">
                                    <span className="text-gray-400 mt-2">•</span>
                                    <p className="leading-relaxed">{section.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="pt-8 text-sm font-semibold">
                        If you wish to exercise any of the rights set out above, please contact us at <span className="font-bold">support@*****.com.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
