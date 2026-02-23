import { Calendar, Droplets, Lightbulb, Sun } from "lucide-react";
import bg4 from '../../assets/images/bg4.png';
import bg5 from '../../assets/images/bg5.png';

export default function GardenTips() {
    const tips = [
        {
            icon: Sun,
            title: 'Sunlight Matters',
            description: 'Most flowering plants need 6-8 hours of direct sunlight daily. Check your garden\'s sunlight patterns before selecting plants.'
        },
        {
            icon: Droplets,
            title: 'Water Wisely',
            description: 'Morning watering is best. It allows plants to dry before evening. Infrequent, deep watering encourages strong roots.'
        },
        {
            icon: Calendar,
            title: 'Timing is Everything',
            description: 'Plant according to your zone\'s frost dates. Spring bulbs in fall, and fall vegetables in late summer.'
        },
        {
            icon: Lightbulb,
            title: 'Soil Preparation',
            description: 'Test your soil pH and amend with compost or fertilizer based on what you\'re planting.'
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
            <img className="absolute -bottom-36 left-0" src={bg5} alt="" />
            <img className="absolute -top-10 right-0" src={bg4} alt="" />
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl xl:text-5xl text-[#0D542B] mb-3">
                        Know More About Your Garden
                    </h2>
                    <p className="text-[#008236] font-medium text-lg">
                        Expert tips and helpful hints to make your garden thrive
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-50 relative">
                    {tips.map((tip, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Icon Circle */}
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center text-3xl">
                                    <tip.icon className="text-[#00A63E]" />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-[#0D542B] text-center mb-3">
                                {tip.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#008236] text-sm text-center leading-relaxed">
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
