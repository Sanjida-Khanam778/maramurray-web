import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import TextEditor from "../editor";
import {
  useGetTermsQuery,
  useUpdateTermsMutation,
  useGetPrivacyQuery,
  useUpdatePrivacyMutation,
} from "../Api/settingsApi";

export default function Settings() {
  const { data: termsData, refetch: refetchTerms } = useGetTermsQuery();
  const { data: privacyData, refetch: refetchPrivacy } = useGetPrivacyQuery();
  const [updateTerms, { isLoading: isUpdatingTerms }] =
    useUpdateTermsMutation();
  const [updatePrivacy, { isLoading: isUpdatingPrivacy }] =
    useUpdatePrivacyMutation();

  const [activeTab, setActiveTab] = useState("terms");

  const [isEditingTerms, setIsEditingTerms] = useState(false);
  const [termsContent, setTermsContent] = useState("");

  const [isEditingPrivacy, setIsEditingPrivacy] = useState(false);
  const [privacyContent, setPrivacyContent] = useState("");

  useEffect(() => {
    if (termsData?.content) {
      setTermsContent(termsData.content);
    }
  }, [termsData]);

  useEffect(() => {
    if (privacyData?.content) {
      setPrivacyContent(privacyData.content);
    }
  }, [privacyData]);

  const handleSaveTerms = async () => {
    try {
      await updateTerms(termsContent).unwrap();
      setIsEditingTerms(false);
      toast.success("Terms & Conditions saved!");
      refetchTerms();
    } catch (error) {
      toast.error("Failed to save Terms & Conditions");
    }
  };

  const handleSavePrivacy = async () => {
    try {
      await updatePrivacy(privacyContent).unwrap();
      setIsEditingPrivacy(false);
      toast.success("Privacy Policy saved!");
      refetchPrivacy();
    } catch (error) {
      toast.error("Failed to save Privacy Policy");
    }
  };

  return (
    <div className="bg-[#f3f2ee] p-6 md:p-10">
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
              <TextEditor
                htmlElement={termsContent}
                onChange={(value) => setTermsContent(value)}
                isEditable={true}
              />
            ) : (
              <div
                className="text-sm text-gray-700 leading-relaxed mb-6 space-y-4 ck-content"
                dangerouslySetInnerHTML={{ __html: termsContent }}
              />
            )}

            <div className="flex gap-3">
              <button
                onClick={handleSaveTerms}
                disabled={isUpdatingTerms}
                className="px-6 py-2.5 bg-[#1F2D16] hover:bg-[#14301f] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUpdatingTerms ? "Saving..." : "Save"}
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
              <TextEditor
                htmlElement={privacyContent}
                onChange={(value) => setPrivacyContent(value)}
                isEditable={true}
              />
            ) : (
              <div
                className="text-sm text-gray-700 leading-relaxed mb-6 space-y-4 ck-content"
                dangerouslySetInnerHTML={{ __html: privacyContent }}
              />
            )}

            <div className="flex gap-3">
              <button
                onClick={handleSavePrivacy}
                disabled={isUpdatingPrivacy}
                className="px-6 py-2.5 bg-[#1F2D16] hover:bg-[#14301f] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUpdatingPrivacy ? "Saving..." : "Save"}
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
