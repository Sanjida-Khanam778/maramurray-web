import bg7 from "../../assets/images/bg7.png";
import { useGetPrivacyQuery } from "../../Api/settingsApi";

export default function PrivacyPolicy() {
  const { data: privacyData, isLoading, error } = useGetPrivacyQuery();

  if (isLoading) {
    return (
      <div className="w-full bg-[#F8F8F8] min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative font-rubik">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="text-xl text-gray-600">Loading Privacy Policy...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-[#F8F8F8] min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative font-rubik">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="text-xl text-red-600">
            Failed to load Privacy Policy
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F8F8F8] min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative font-rubik">
      {/* Background Decoration */}
      <img src={bg7} alt="" className="absolute top-40 left-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#1F2D16] text-center mb-16">
          Privacy Policy
        </h1>

        <div className="p-8">
          <div
            className="text-sm text-gray-700 leading-relaxed ck-content"
            dangerouslySetInnerHTML={{ __html: privacyData?.content || "" }}
          />
        </div>
      </div>
    </div>
  );
}
