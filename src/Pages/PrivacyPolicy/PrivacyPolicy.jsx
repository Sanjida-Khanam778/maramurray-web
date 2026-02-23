import bg7 from '../../assets/images/bg7.png';

export default function PrivacyPolicy() {
    const sections = [
        {
            title: "1. Collection of Personal Information",
            content: (
                <div className="space-y-4 text-sm">
                    <p>We collect personal information that you provide us, from third parties, and automatically when you use our Platform.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-bold">Account and Profile Information:</span> Email, name, address, and business information for professionals.</li>
                        <li><span className="font-bold">Content You Submit:</span> Photos, reviews, messages, project details, and invoices.</li>
                        <li><span className="font-bold">Purchases:</span> Phone number, address, and payment method details.</li>
                        <li><span className="font-bold">Communications:</span> Call time, duration, and content of communications with us.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "2. Use of Personal Information",
            content: (
                <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Provide, operate, and improve our Platform</li>
                    <li>Personalize your experience and display relevant advertising</li>
                    <li>Provide customer support and prevent fraud</li>
                    <li>Comply with legal obligations and enforce our Terms of Use</li>
                </ul>
            )
        },
        {
            title: "3. Sharing Your Personal Information",
            content: (
                <p className="text-sm italic">We do not sell personal information for monetary compensation. We share information with service providers, advertising partners, and corporate affiliates to operate our services.</p>
            )
        },
        {
            title: "4. Your Choices and Rights",
            content: (
                <div className="space-y-4 text-sm">
                    <p>Depending on your location, you may have the right to access, correct, download, or delete your data.</p>
                    <p>Contact us at <span className="font-bold text-[#1F2D16]">customerservice@florle.com</span> to exercise these rights.</p>
                </div>
            )
        },
        {
            title: "5. California Privacy Statement",
            content: (
                <p className="text-sm">California residents have additional rights under the CCPA, including the right to know, correct, and delete personal information, and the right to opt-out of sharing.</p>
            )
        }
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


                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                        <h2 className="text-2xl font-bold text-[#1F2D16] mb-4">Florle LLC Privacy Policy</h2>
                        <p className="leading-relaxed mb-4">
                            This Privacy Policy describes how we handle your personal information when you use the Florle Platform.
                            By accessing our Platform, you acknowledge the collection and use of information as described here.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="text-xl font-bold text-[#1F2D16] border-b border-gray-200 pb-2">
                                    {section.title}
                                </h3>
                                <div className="leading-relaxed">{section.content}</div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-12 text-sm text-gray-500 border-t border-gray-200">
                        <p>If you have questions about this Privacy Policy, please contact us at <span className="font-bold">customerservice@florle.com.</span></p>
                        <p className="mt-2 italic font-semibold">Florle LLC — Protecting Your Digital Landscape</p>
                        <p className="mt-1">Last updated: February 23, 2026</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
