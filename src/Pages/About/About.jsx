import aboutBG from '../../assets/images/aboutBG.png';
import bg8 from '../../assets/images/bg8.png';
import ChallengeSection from '../../components/ChallengeSection/ChallengeSection';
import CTADownload from '../../components/CTADownload/CTADownload';

export default function About() {

    return (
        <div className='font-bricolage bg-[#F8F8F8] min-h-screen'>
            {/* Hero Section */}
            <div
                className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${aboutBG})` }}
            >
                <div className="relative z-10 text-center px-4">
                    <p className="text-2xl md:text-4xl md:leading-loose text-white max-w-5xl mx-auto font-medium bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20 shadow-lg leading-relaxed">
                        Our mission is to make gardening fun, creative
                        and easy for everyone. We believe you don’t need to be
                        a professional to grow something beautiful- just a little inspiration, a little dirt and the right tools.  </p>

                </div>
            </div>

            <ChallengeSection />

            {/* Florle Mission Section */}
            <div
                className="relative py-24 md:py-32 px-4 bg-cover bg-center flex items-center justify-center my-12"
                style={{ backgroundImage: `url(${bg8})` }}
            >
                <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
                    <p className="text-xl md:text-3xl text-white font-semibold bg-black/20 backdrop-blur-sm p-8 md:p-14 rounded-2xl border border-white/20 shadow-2xl md:leading-relaxed">
                        Florle was created to make gardening simple, creative and fun for
                        everyone. Whether you're planting your very first flowerbed,
                        dreaming up a full backyard garden or even repotting a small planter,
                        we're here to help you design something you love and have fun while
                        doing it. No experience or degree required just a desire to make
                        something beautiful and a willingness to get your hands a little dirty.
                    </p>
                </div>
            </div>

            {/* Call to Action */}
            {/* <section className="text-center relative">
                <img src={leaf4} className='absolute z-10 left-0 top-0' alt="" />
                <div className="bg-gradient-to-l from-[#1F2D16] to-[#3A5A40] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
                    <img src={quotation} className='mx-auto mb-6' alt="" />
                    <p className="text-3xl xl:text-5xl text-white max-w-4xl mx-auto font-bold mb-8 z-50 relative">
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
            </section> */}


            {/* Values Grid */}
            {/* <section className="py-20 px-4 relative">
                <img src={leaf5} className='absolute z-10 right-0 top-10' alt="" />

                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-left text-[#1D2915] mb-16">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-50 relative">
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
            </section> */}
            {/* <StatsBanner /> */}
            <CTADownload />

        </div>
    );
}