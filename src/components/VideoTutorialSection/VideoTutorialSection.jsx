import React, { useState } from 'react';
import plant from '../../assets/images/plant.png';

export default function VideoTutorialSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            <img src={plant} className='absolute bottom-0 left-0' alt="" />
            <div className="max-w-6xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl text-[#0D542B] mb-4">
                        See How It Works
                    </h2>
                    <p className="text-lg text-[#008236] max-w-2xl mx-auto">
                        Watch our quick tutorial to see how easy it is to design your dream garden
                    </p>
                </div>

                {/* Video Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    {!isPlaying ? (
                        // Video Thumbnail with Play Button
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=600&fit=crop"
                                alt="Garden tutorial preview"
                                className="w-full h-[500px] object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

                            {/* Play Button */}
                            <button
                                onClick={handlePlayVideo}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 group"
                                aria-label="Play video"
                            >
                                <svg
                                    className="w-10 h-10 text-green-600 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>

                            {/* Bottom Info Bar */}
                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">
                                        Watch Sarah's Garden Journey
                                    </span>
                                </div>

                                <div className="bg-black/70 backdrop-blur-sm rounded-full px-4 py-2">
                                    <span className="text-sm font-medium text-white">2:35 min</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Video Player (iframe for YouTube/Vimeo or video element)
                        <div className="relative w-full h-[500px] bg-black">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/z2Xs_x8-uI8?si=-FOJvOYA8BflxEUE"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>

                {/* Bottom Description */}
                <p className="text-center text-green-600 mt-6 text-sm md:text-base">
                    A quick and easy tutorial with great graphics set to music
                </p>
            </div>
        </div>
    );
}