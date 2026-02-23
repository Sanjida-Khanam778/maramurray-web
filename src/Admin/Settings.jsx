import { useState } from "react";
import toast from "react-hot-toast";
import TextEditor from "../editor";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("terms");
  const [editorContent, setEditorContent] = useState("");
  const [logoFile, setLogoFile] = useState(null);
  const [platformName, setPlatformName] = useState(
    "Learning Management System",
  );
  const [platformUrl, setPlatformUrl] = useState("https://lms.school.com");
  const [platformDesc, setPlatformDesc] = useState(
    "A comprehensive learning management system for students and teachers",
  );

  const [isEditingTerms, setIsEditingTerms] = useState(false);
  const [termsContent, setTermsContent] =
    useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum quam at vestibulum porttitor. Vestibulum tempor ac purus vitae finibus. Cras tempor felis vitae sapien fermentum, nec feugiat ligula interdum. Morbi mattis imperdiet libero, a eleifend nunc condimentum nec. In hac habitasse platea dictumst. In ac porttitor mi. Sed neque ligula, fringilla vitae nunc id, tristique vestibulum eros. Sed a tortor erat. Sed sem libero, condimentum sed dui non, congue mollis felis. Nam consectetur tincidunt elit non accumsan. Maecenas congue nibh sed aliquet sagittis. Fusce mollis tortor sed pharetra euismod.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum quam at vestibulum porttitor. Vestibulum tempor ac purus vitae finibus. Cras tempor felis vitae sapien fermentum, nec feugiat ligula interdum. Morbi mattis imperdiet libero, a eleifend nunc condimentum nec. In hac habitasse platea dictumst. In ac porttitor mi. Sed neque ligula, fringilla vitae nunc id, tristique vestibulum eros. Sed a tortor erat. Sed sem libero, condimentum sed dui non, congue mollis felis. Nam consectetur tincidunt elit non accumsan. Maecenas congue nibh sed aliquet sagittis. Fusce mollis tortor sed pharetra euismod.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum quam at vestibulum porttitor. Vestibulum tempor ac purus vitae finibus. Cras tempor felis vitae sapien fermentum, nec feugiat ligula interdum. Morbi mattis imperdiet libero, a eleifend nunc condimentum nec. In hac habitasse platea dictumst. In ac porttitor mi. Sed neque ligula, fringilla vitae nunc id, tristique vestibulum eros. Sed a tortor erat. Sed sem libero, condimentum sed dui non, congue mollis felis. Nam consectetur tincidunt elit non accumsan. Maecenas congue nibh sed aliquet sagittis. Fusce mollis tortor sed pharetra euismod.`);

  const [isEditingPrivacy, setIsEditingPrivacy] = useState(false);
  const [privacyContent, setPrivacyContent] =
    useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum quam at vestibulum porttitor. Vestibulum tempor ac purus vitae finibus. Cras tempor felis vitae sapien fermentum, nec feugiat ligula interdum. Morbi mattis imperdiet libero, a eleifend nunc condimentum nec. In hac habitasse platea dictumst. In ac porttitor mi. Sed neque ligula, fringilla vitae nunc id, tristique vestibulum eros. Sed a tortor erat. Sed sem libero, condimentum sed dui non, congue mollis felis. Nam consectetur tincidunt elit non accumsan. Maecenas congue nibh sed aliquet sagittis. Fusce mollis tortor sed pharetra euismod.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum quam at vestibulum porttitor. Vestibulum tempor ac purus vitae finibus. Cras tempor felis vitae sapien fermentum, nec feugiat ligula interdum. Morbi mattis imperdiet libero, a eleifend nunc condimentum nec. In hac habitasse platea dictumst. In ac porttitor mi. Sed neque ligula, fringilla vitae nunc id, tristique vestibulum eros. Sed a tortor erat. Sed sem libero, condimentum sed dui non, congue mollis felis. Nam consectetur tincidunt elit non accumsan. Maecenas congue nibh sed aliquet sagittis. Fusce mollis tortor sed pharetra euismod.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum quam at vestibulum porttitor. Vestibulum tempor ac purus vitae finibus. Cras tempor felis vitae sapien fermentum, nec feugiat ligula interdum. Morbi mattis imperdiet libero, a eleifend nunc condimentum nec. In hac habitasse platea dictumst. In ac porttitor mi. Sed neque ligula, fringilla vitae nunc id, tristique vestibulum eros. Sed a tortor erat. Sed sem libero, condimentum sed dui non, congue mollis felis. Nam consectetur tincidunt elit non accumsan. Maecenas congue nibh sed aliquet sagittis. Fusce mollis tortor sed pharetra euismod.`);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoFile(URL.createObjectURL(file));
    }
  };

  const handleSaveGeneral = () => {
    toast.success("Settings saved successfully!");
  };

  const handleSaveTerms = () => {
    setIsEditingTerms(false);
    toast.success("Terms & Conditions saved!");
  };

  const handleSavePrivacy = () => {
    setIsEditingPrivacy(false);
    toast.success("Privacy Policy saved!");
  };

  return (
    <div className="min-h-screen bg-[#f3f2ee] p-6 md:p-10">
      <div className="mx-auto">
        {/* ── Header ── */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your account settings and preferences
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="flex gap-8 mb-6 border-b border-gray-200">
          {/* <button
            onClick={() => setActiveTab("general")}
            className={`pb-3 text-sm font-semibold transition-colors relative ${
              activeTab === "general"
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            General Settings
            {activeTab === "general" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
            )}
          </button> */}
          <button
            onClick={() => setActiveTab("terms")}
            className={`pb-3 text-sm font-semibold transition-colors relative ${
              activeTab === "terms"
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Terms & Conditions
            {activeTab === "terms" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("privacy")}
            className={`pb-3 text-sm font-semibold transition-colors relative ${
              activeTab === "privacy"
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Privacy Policy
            {activeTab === "privacy" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
            )}
          </button>
        </div>

        {/* ── Tab Content ── */}
        {activeTab === "general" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-2 mb-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-5 h-5 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <h2 className="text-base font-bold text-gray-900">
                Platform Information
              </h2>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Basic configuration for your platform
            </p>

            {/* Logo Upload */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#1F2D16] rounded-full flex items-center justify-center text-white font-bold text-xl overflow-hidden">
                {logoFile ? (
                  <img
                    src={logoFile}
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  "FR"
                )}
              </div>
              <div>
                <input
                  type="file"
                  id="logo-upload"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
                <label
                  htmlFor="logo-upload"
                  className="inline-block px-4 py-2 bg-[#1F2D16] text-white text-sm font-medium rounded-lg cursor-pointer transition-colors"
                >
                  Upload Platform logo
                </label>
                <p className="text-xs text-gray-400 mt-1">
                  Professional photo recommended (JPG, PNG - Max. 5MB)
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Platform Name
                </label>
                <input
                  type="text"
                  value={platformName}
                  onChange={(e) => setPlatformName(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Platform URL
                </label>
                <input
                  type="url"
                  value={platformUrl}
                  onChange={(e) => setPlatformUrl(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Platform Description
              </label>
              <input
                type="text"
                value={platformDesc}
                onChange={(e) => setPlatformDesc(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>

            <button
              onClick={handleSaveGeneral}
              className="px-6 py-2.5 bg-[#1F2D16] text-white font-semibold rounded-lg transition-colors"
            >
              Save
            </button>
          </div>
        )}

        {activeTab === "terms" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                <h2 className="text-base font-semibold text-gray-500">
                  Terms & Conditions
                </h2>
              </div>
              {!isEditingTerms && (
                <button
                  onClick={() => setIsEditingTerms(true)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Edit"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
              )}
            </div>

            {isEditingTerms ? (
              <textarea
                value={termsContent}
                onChange={(e) => setTermsContent(e.target.value)}
                rows={12}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 leading-relaxed focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none mb-6"
              />
            ) : (
              <div className="text-sm text-gray-700 leading-relaxed mb-6 space-y-4">
                {termsContent.split("\n\n").map((paragraph, i) => (
                  <p key={i}>• {paragraph}</p>
                ))}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleSaveTerms}
                className="px-6 py-2.5 bg-[#1F2D16] hover:bg-[#14301f] text-white font-semibold rounded-lg transition-colors"
              >
                Save
              </button>
              {isEditingTerms && (
                <button
                  onClick={() => setIsEditingTerms(false)}
                  className="px-6 py-2.5 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  Cancel
                </button>
              )}
            </div>
          </div>
        )}

        {activeTab === "privacy" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                <h2 className="text-base font-semibold text-gray-500">
                  Privacy Policy
                </h2>
              </div>
              {!isEditingPrivacy && (
                <button
                  onClick={() => setIsEditingPrivacy(true)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Edit"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
              )}
            </div>

            {isEditingPrivacy ? (
            //  
                        <TextEditor htmlElement={editorContent} onChange={(value) => setEditorContent(value)} isEditable={true} />

            ) : (
              <div className="text-sm text-gray-700 leading-relaxed mb-6 space-y-4">
                {privacyContent.split("\n\n").map((paragraph, i) => (
                  <p key={i}>• {paragraph}</p>
                ))}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleSavePrivacy}
                className="px-6 py-2.5 bg-[#1F2D16] hover:bg-[#14301f] text-white font-semibold rounded-lg transition-colors"
              >
                Save
              </button>
              {isEditingPrivacy && (
                <button
                  onClick={() => setIsEditingPrivacy(false)}
                  className="px-6 py-2.5 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  Cancel
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
