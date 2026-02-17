import React from 'react';
import bg7 from '../../assets/images/bg7.png';

export default function PrivacyPolicy() {
    const sections = [
        "We collect information such as your location and soil preferences to provide customized garden designs and plant recommendations.",
        "Images uploaded for plant identification are processed securely and are only stored if you choose to save them to your garden profile.",
        "Your data helps us improve our AI models, ensuring more accurate suggestions for the entire GardenApp community.",
        "We never share your personal information with third-party advertisers without your explicit consent.",
        "You have the right to access, export, or delete your garden data at any time through the app settings."
    ];

    return (
        <div className="w-full bg-[#F8F8F8] min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative font-rubik">
            {/* Background Decoration */}
            <img src={bg7} alt="" className="absolute top-40 left-0" />

            <div className="max-w-4xl mx-auto relative z-10">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#1F2D16] text-center mb-16">
                    Privacy Policy
                </h1>

                <div className="space-y-8 text-gray-700">
                    <p className="text-sm font-semibold text-gray-400">
                        Last updated: October 26, 2024
                    </p>

                    <p className="leading-relaxed">
                        At GardenApp, we value your privacy as much as your garden. This policy outlines how we handle your data,
                        from the photos you take of your plants to the design preferences you share with our AI.
                        Our goal is to provide you with the best tools for growth while keeping your personal information safe and secure.
                    </p>

                    <ul className="space-y-8 list-none">
                        {sections.map((text, index) => (
                            <li key={index} className="flex gap-4">
                                <span className="text-gray-400 mt-2">•</span>
                                <p className="leading-relaxed">{text}</p>
                            </li>
                        ))}
                    </ul>

                    <p className="pt-8 text-sm font-semibold">
                        If you wish to exercise any of the rights set out above, please contact us at <span className="font-bold">support@*****.com.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
