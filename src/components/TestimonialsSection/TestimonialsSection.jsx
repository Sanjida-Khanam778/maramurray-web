import React from 'react';
import bg4 from '../../assets/images/bg6.png';

export default function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            location: 'Portland, OR',
            rating: 5,
            text: '"Florle transformed my backyard into a stunning garden oasis. The AI suggestions were spot-on for my climate and soil type!"',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
        },
        {
            id: 2,
            name: 'Michael Chen',
            location: 'Austin, TX',
            rating: 5,
            text: '"As a complete beginner, the step-by-step guidance made gardening approachable. My vegetable garden is thriving thanks to Florle!"',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        },
        {
            id: 3,
            name: 'Emma Rodriguez',
            location: 'Miami, FL',
            rating: 5,
            text: '"I love how easy it is to visualize my garden before planting. The 3D rendering feature saved me from costly mistakes!"',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
        }
    ];

    const StarIcon = ({ filled }) => (
        <svg
            className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );

    return (
        <div className="w-full relative py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${bg4})` }}
            >

            {/* Green Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D542B]/20 to-[#00A63E]/20"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl text-white mb-4">
                        What They Say
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                       Check out what our Florle community is saying
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            {/* User Info */}
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-green-200"
                                />
                                <div>
                                    <h3 className="font-semibold text-[#1F2D16]">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-[#00A63E]">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>

                            {/* Star Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, index) => (
                                    <StarIcon key={index} filled={index < testimonial.rating} />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-[#016630] leading-relaxed">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}