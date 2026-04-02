import bg7 from "../../assets/images/bg7.png";
import bg2 from "../../assets/images/bg2.png";
import privacy from "../../assets/images/privacy.png";
import leaf7 from "../../assets/images/leaf7.png";
import { useGetPrivacyQuery } from "../../Api/settingsApi";

export default function PrivacyPolicy() {
  const { data: privacyData, isLoading, error } = useGetPrivacyQuery();

  if (isLoading) {
    return (
      <div className="w-full min-h-screen relative font-rubik">
        <div className="relative z-10 pt-40 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto p-8 text-center">
            <div className="text-xl text-gray-600">
              Loading Privacy Policy...
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen relative font-rubik">
        <div className="absolute inset-0">
          <img
            src={bg7}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 pt-40 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 text-center">
            <div className="text-xl text-red-600">
              Failed to load Privacy Policy
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen relative font-rubik bg-[#F8F8F8]">
      <div className="w-full relative overflow-hidden h-[320px] sm:h-[380px] md:h-[480px] lg:h-[620px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${privacy})` }}
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Privacy Policy
          </h1>
        </div>
      </div>

      <div className="relative z-20 mt-10 px-4 sm:px-6 lg:px-8">
        <img src={leaf7} className="absolute left-0 top-0 z-10 pointer-events-none" alt="Leaf" />
        <img src={bg2} className="absolute right-0 top-[20%] z-10 pointer-events-none" alt="Leaf" />
        <img src={leaf7} className="absolute left-0 top-[45%] z-10 pointer-events-none" alt="Leaf" />
        <img src={bg2} className="absolute right-0 top-[65%] z-10 pointer-events-none" alt="Leaf" />
        <img src={leaf7} className="absolute left-0 top-[85%] z-10 pointer-events-none" alt="Leaf" />
        <div className="max-w-7xl mx-auto p-8 sm:p-10">
          <div
            className="text-sm text-gray-700 leading-loose ck-content"
            style={{ lineHeight: "2.0" }}
            dangerouslySetInnerHTML={{ __html: privacyData?.content || "" }}
          />
        </div>
      </div>
    </div>
  );
}
