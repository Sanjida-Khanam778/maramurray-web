import Navbar from '../Navbar/Navbar';
import bgImage from '../../assets/images/bgImage.png';

export default function Banner() {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/15"></div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                <div className="flex-1 flex items-center justify-center px-4 py-12">
                    <div className="max-w-4xl w-full bg-gradient-to-br from-[#A1AFBA]/10 via-[#848160]/10 to-[#A365AD]/10 backdrop-blur-sm rounded-[20px] p-8 md:p-12 text-center text-white border border-white/20">
                        <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
                            Design Your Dream <br />
                            <span className="relative md:text-8xl font-extrabold inline-block text-[#3A9820] px-2">
                                Garden
                                <div className="absolute bottom-1 left-0 w-full h-8 bg-[#FFD666] -z-10"></div>
                            </span>
                            <span className="text-5xl md:text-8xl font-bold mb-6 leading-tight"></span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90 drop-shadow-sm">
                            Design your own garden or let Florle design it for you. <br />
                            It's as easy as that. The perfect tool for the gardener in you.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="flex items-center gap-3 bg-white text-black border border-black/50 px-3 py-2 rounded-xl transition-all transform hover:scale-105">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" className="h-8 w-8 invert" alt="App Store" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold text-gray-500">Download on the</div>
                                    <div className="text-xl font-bold leading-none">App Store</div>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 bg-white text-black border border-black/50 px-3 py-2 rounded-xl transition-all transform hover:scale-105">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" className="h-8 w-8" alt="Google Play" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold text-gray-500">GET IT ON</div>
                                    <div className="text-xl font-bold leading-none">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
