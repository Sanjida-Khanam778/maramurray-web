import {
  Upload,
  Compass,
  TreePine,
  Palette,
  Sparkles,
  Camera,
  MousePointer2,
  ShoppingCart,
  CameraIcon,
  MousePointer,
} from "lucide-react";
import bgImage from "../../assets/images/bg1.png";
import bgImage2 from "../../assets/images/bg2.png";
import leaf from "../../assets/images/leaf.png";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Upload",
      description: "take a pic of your garden or use one from your library",
      icon: Camera,
      position: "left",
    },
    {
      number: "2",
      title: "Measure",
      description: "Use the measuring tool to set the boarders of your garden",
      icon: Sparkles,
      position: "right",
    },
    {
      number: "3",
      title: "Select",
      description: "Choose your favorite plants",
      icon: MousePointer2,
      position: "left",
    },
    {
      number: "4",
      title: "Design",
      description: "Create your own design or let Florle design for you",
      icon: ShoppingCart,
      position: "right",
    },
    {
      number: "5",
      title: "Get to Work",
      description:
        "Print your plant list, necessary tools and calendar and bring your garden design to life",
      icon: MousePointer2,
      position: "left",
    },
  ];

  return (
    <section
      className="py-24 relative bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Background Decoration */}
      <div className="absolute right-0 bottom-0 w-1/3 pointer-events-none">
        <img src={bgImage2} alt="" className="w-full h-auto" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl mb-6">
            How it{" "}
            <span className="bg-gradient-to-b from-[#FFC973] to-[#A85013] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-[#A0A0A0] text-xl max-w-3xl mx-auto font-medium">
            From concept to design, we guide you through every step of gardening
            journey.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Centered Timeline Loop */}

          <div className="w-full flex flex-col gap-10 items-center">
            <div className={`flex items-center w-full mb-4 `}>
              {/* Content Box */}
              <div className="flex-1 px-4 md:px-12">
                <div
                  className={`bg-gradient-to-br text-right from-[#71B25E]/70 to-[#1D2915] rounded-[30px] p-8 md:p-10 shadow-2xl relative min-h-[160px] flex flex-col justify-center`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-2 w-8 h-8 bg-white p-6 text-[#3D5A2D] border border-black/70 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    <span className="bg-[#00A63E] text-white p-3 flex items-center justify-center w-full h-full rounded-full">
                      {" "}
                      1
                    </span>
                  </div>

                  <h3 className="text-3xl font-medium text-white mb-3">
                    Upload
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    take a pic of your garden or use one from your library
                  </p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="relative">
                <div className="w-24 md:w-32 flex justify-center relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-b from-[#1D2915] to-[#71B25E] rounded-[25px] flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(29,41,21,0.6)] relative z-20 transition-transform">
                    <CameraIcon className="text-white w-10 h-10" />
                  </div>
                </div>
                <div className="absolute -bottom-32 left-5">
                  <img src={leaf} alt="" className="w-full h-auto" />
                </div>
              </div>
              {/* Spacer for balance */}
              <div className="flex-1 hidden md:block px-4 md:px-12"></div>
            </div>
            <div className={`flex items-center w-full mb-4 `}>
              {/* Spacer for balance */}
              <div className="flex-1 hidden md:block px-4 md:px-12"></div>
              {/* Center Icon */}
              <div className="relative">
                <div className="w-24 md:w-32 flex justify-center relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-b from-[#1D2915] to-[#71B25E] rounded-[25px] flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(29,41,21,0.6)] relative z-20 transition-transform">
                    <Sparkles
                      className="text-white w-10 h-10"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>
                <div className="absolute scale-x-[-1] -bottom-32 left-5">
                  <img src={leaf} alt="" className="w-full h-auto" />
                </div>
              </div>
              {/* Content Box */}
              <div className="flex-1 px-4 md:px-12">
                <div
                  className={`bg-gradient-to-br text-right from-[#71B25E]/70 to-[#1D2915] rounded-[30px] p-8 md:p-10 shadow-2xl relative min-h-[160px] flex flex-col justify-center`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-2 w-8 h-8 bg-white p-6 text-[#3D5A2D] border border-black/70 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    <span className="bg-[#00A63E] text-white p-3 flex items-center justify-center w-full h-full rounded-full">
                      {" "}
                      2
                    </span>
                  </div>

                  <h3 className="text-3xl font-medium text-white mb-3">
                    Measure
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Use the measuring tool to set the boarders of your
                    garden{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className={`flex items-center w-full mb-4 `}>
              {/* Content Box */}
              <div className="flex-1 px-4 md:px-12">
                <div
                  className={`bg-gradient-to-br from-[#71B25E]/70 to-[#1D2915] rounded-[30px] p-8 md:p-10 shadow-2xl relative min-h-[160px] flex flex-col justify-center`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-2 w-8 h-8 bg-white p-6 text-[#3D5A2D] border border-black/70 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    <span className="bg-[#00A63E] text-white p-3 flex items-center justify-center w-full h-full rounded-full">
                      {" "}
                      3
                    </span>
                  </div>

                  <h3 className="text-3xl font-medium text-white mb-3">
                    Select
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Choose your favorite plants{" "}
                  </p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="relative">
                <div className="w-24 md:w-32 flex justify-center relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-b from-[#1D2915] to-[#71B25E] rounded-[25px] flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(29,41,21,0.6)] relative z-20 transition-transform">
                    <MousePointer className="text-white w-10 h-10" />
                  </div>
                </div>
                <div className="absolute -bottom-32 left-5">
                  <img src={leaf} alt="" className="w-full h-auto" />
                </div>
              </div>
              {/* Spacer for balance */}
              <div className="flex-1 hidden md:block px-4 md:px-12"></div>
            </div>
            <div className={`flex items-center w-full mb-4 `}>
              {/* Spacer for balance */}
              <div className="flex-1 hidden md:block px-4 md:px-12"></div>
              {/* Center Icon */}
              <div className="relative">
                <div className="w-24 md:w-32 flex justify-center relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-b from-[#1D2915] to-[#71B25E] rounded-[25px] flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(29,41,21,0.6)] relative z-20 transition-transform">
                    <ShoppingCart
                      className="text-white w-10 h-10"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>
                <div className="absolute scale-x-[-1] -bottom-32 left-5">
                  <img src={leaf} alt="" className="w-full h-auto" />
                </div>
              </div>
              {/* Content Box */}
              <div className="flex-1 px-4 md:px-12">
                <div
                  className={`bg-gradient-to-br from-[#71B25E]/70 to-[#1D2915] rounded-[30px] p-8 md:p-10 shadow-2xl relative min-h-[160px] flex flex-col justify-center`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-2 w-8 h-8 bg-white p-6 text-[#3D5A2D] border border-black/70 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    <span className="bg-[#00A63E] text-white p-3 flex items-center justify-center w-full h-full rounded-full">
                      {" "}
                      4
                    </span>
                  </div>

                  <h3 className="text-3xl font-medium text-white mb-3">
                    Design
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Drag and drop your plant selections to arrange your perfect
                    layout or Let Florle Bloom do all the work and design it for
                    you{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className={`flex items-center w-full mb-4 `}>
              {/* Content Box */}
              <div className="flex-1 px-4 md:px-12">
                <div
                  className={`bg-gradient-to-br from-[#71B25E]/70 to-[#1D2915] rounded-[30px] p-8 md:p-10 shadow-2xl relative min-h-[160px] flex flex-col justify-center`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-2 w-8 h-8 bg-white p-6 text-[#3D5A2D] border border-black/70 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    <span className="bg-[#00A63E] text-white p-3 flex items-center justify-center w-full h-full rounded-full">
                      {" "}
                      5
                    </span>
                  </div>

                  <h3 className="text-3xl font-medium text-white mb-3">
                    Get to Work
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Export a shopping list of plants and supplies, create a
                    catalog of plant details get reminders, calendar updates and
                    more.
                  </p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="relative">
                <div className="w-24 md:w-32 flex justify-center relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-b from-[#1D2915] to-[#71B25E] rounded-[25px] flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(29,41,21,0.6)] relative z-20 transition-transform">
                    <MousePointer className="text-white w-10 h-10" />
                  </div>
                </div>
              </div>
              {/* Spacer for balance */}
              <div className="flex-1 hidden md:block px-4 md:px-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
