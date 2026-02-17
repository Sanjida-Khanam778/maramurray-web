import React from 'react';
import { CheckCircle2, User, Sparkles } from 'lucide-react';
import left from '../../assets/images/left.png';
import right from '../../assets/images/right.png';
import bg1 from '../../assets/images/bg3.png';

export default function ChooseYourPath() {
    const paths = [
        {
            id: 1,
            title: 'DIY',
            subtitle: 'Your creativity, your design',
            icon: User,
            features: [
                'Upload your garden photo',
                'Measure your space',
                'Select plant material',
                'Drag and drop images in desired placement',
                'Create your design',
                'Get 3D image and realistic rendering',
                'Plant calendar and complete plant list',
                'Save designs to your profile'
            ],
            bgImage: left,
            bgColor: '#00A63E'
        },
        {
            id: 2,
            title: 'Florle Blossom',
            subtitle: 'AI-powered garden design',
            icon: Sparkles,
            features: [
                'Upload your garden photo',
                'Measure your space',
                'Select from suggested plant lists',
                'Click create - let AI design for you',
                'Get 3D image and realistic rendering',
                'Plant calendar and complete plant list',
                'Affiliate links for easy shopping',
                'Save designs to your profile'
            ],
            bgImage: right,
            bgColor: '#9800A6'
        }
    ];

    return (
        <section style={{ backgroundImage: `url(${bg1})` }} className="py-16 px-4 md:px-8 bg-no-repeat">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl text-[#0D542B] mb-4">
                        Choose Your Path
                    </h2>
                    <p className="text-[#008236] font-medium text-lg max-w-2xl mx-auto">
                        Whether you want full creative control or expert AI assistance, Florle has the perfect solution for you.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {paths.map((path) => (
                        <div
                            key={path.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image Placeholder */}
                            <div style={{ backgroundImage: `url(${path.bgImage})` }} className={`px-6 h-40 md:h-48 xl:h-56 bg-no-repeat bg-cover bg-center flex items-center justify-start relative overflow-hidden`}>
                                <div className={`relative z-10 bg-[${path.bgColor}]/20 backdrop-blur-sm p-6 rounded-2xl w-2/3`}>
                                    <path.icon className="text-white w-10 h-10" />
                                    <h3 className="text-white text-2xl font-bold my-2">{path.title}</h3>
                                    <p className="text-white/90 mt-1">{path.subtitle}</p>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="p-6 md:p-8">
                                <ul className="space-y-3">
                                    {path.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-[#00A63E]"></div>
                                            </div>
                                            <span className="text-slate-700 text-sm md:text-base">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
