import React from 'react';
import bg7 from '../../assets/images/bg7.png';

export default function TermsConditions() {
    const sections = [
        {
            title: "1. The Florle Platform and Which Terms Apply to You",
            content: (
                <div className="space-y-4">
                    <p>This is a Binding Agreement. These Terms set forth the binding legal agreement between you and Florle LLC ("Florle," "we," "our," or "us"). These Terms govern your use of florle.com and all related websites, mobile applications, products, software, service, programs, and networks offered by Florle.</p>
                    <p>If you are accessing or using the Florle Platform or its services on behalf of a business or other legal entity:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>References to "you" and "your" include both you and that business or entity.</li>
                        <li>You represent and warrant that you are an authorized representative with authority to bind the entity to this Agreement.</li>
                        <li>The entity is legally responsible for your access and use of the Florle Platform.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "2. Using the Florle LLC Platform",
            content: (
                <div className="space-y-4">
                    <p>Anyone over 18 years of age may use the Florle LLC Platform. Use by individuals under 18 is strictly prohibited. Access to certain features requires creating an account.</p>
                    <p><span className="font-bold">Termination:</span> You may close your account at any time through your account settings. Florle LLC may suspend or terminate your access to the platform at any time, for any reason, with or without notice or liability.</p>
                </div>
            )
        },
        {
            title: "3. Your Content",
            content: (
                <div className="space-y-4">
                    <p>The Florle LLC Platform enables you to post, input, upload, or otherwise submit materials. You grant to Florle LLC a non-exclusive, perpetual, irrevocable, royalty-free, transferable, worldwide license to use, reproduce, modify, and distribute Your Content.</p>
                    <p><span className="font-bold">Ownership:</span> You retain ownership of all copyrights in Your Content, subject to the license granted above.</p>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-bold text-[#1F2D16] mb-2">AI & Visual Tools Notice:</h4>
                        <p className="text-sm">Our AI-powered design tools are for general informational purposes only and should not be considered professional landscaping or horticultural advice. All recommendations are provided "as is" and outcomes are not guaranteed.</p>
                    </div>
                </div>
            )
        },
        {
            title: "4. Our Content and Materials",
            content: (
                <p>All intellectual property related to the Florle LLC Platform is owned by Florle LLC, its affiliates, licensors, or partners. We grant you a limited, non-exclusive, revocable license to access and use Our Content and Materials solely for personal, non-commercial use.</p>
            )
        },
        {
            title: "5. Affiliate Disclosure",
            content: (
                <p>The Company participates in affiliate marketing programs. We may earn a commission if Users click on a link and make a purchase through a third-party retailer. This does not increase the price paid by Users.</p>
            )
        },
        {
            title: "6. Disclaimer of Warranties & Limitation of Liability",
            content: (
                <div className="space-y-4">
                    <p>The App, AI Features, content, and services are provided on an "AS IS" and "AS AVAILABLE" basis. Florle LLC disclaims all warranties, express or implied.</p>
                    <p>To the fullest extent permitted by law, Florle LLC's total cumulative liability shall not exceed the greater of $100 or the amount paid by the User to the Company in the twelve (12) months preceding the claim.</p>
                </div>
            )
        }
    ];

    return (
        <div className="w-full bg-[#F8F8F8] min-h-screen py-20 pt-40 px-4 sm:px-6 lg:px-8 relative font-rubik">
            <img src={bg7} alt="" className="absolute top-40 left-0" />
            <div className="max-w-4xl mx-auto relative z-10">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#1F2D16] text-center mb-16 underline decoration-transparent">
                    Terms & Condition
                </h1>

                <div className="space-y-8 text-gray-700">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#1F2D16] mb-4">Florle LLC Terms of Use</h2>
                        <p className="leading-relaxed mb-4">
                            Florle LLC is a platform for gardening design and landscaping, providing an all-in-one software solution for individuals to plant and update their gardens from start to finish.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="bg-[#1F2D16]/5 p-4 rounded-xl border border-[#1F2D16]/10">
                                <h4 className="font-bold text-[#1F2D16] mb-1">Binding Contract</h4>
                                <p className="text-sm">This is a binding agreement between you and Florle LLC.</p>
                            </div>
                            <div className="bg-[#1F2D16]/5 p-4 rounded-xl border border-[#1F2D16]/10">
                                <h4 className="font-bold text-[#1F2D16] mb-1">Privacy</h4>
                                <p className="text-sm">Our Privacy Policy sets forth our practices regarding your information.</p>
                            </div>
                        </div>
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
                        <p>If you wish to exercise any of the rights set out above, please contact us at <span className="font-bold">support@florle.com.</span></p>
                        <p className="mt-2 italic">Last updated: February 23, 2026</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
