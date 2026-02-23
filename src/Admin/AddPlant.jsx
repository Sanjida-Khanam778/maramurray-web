import { useState } from "react";
import toast from "react-hot-toast";


export default function AddPlantForm({ initialData, onBack }) {
    const [formData, setFormData] = useState({
        commonName: initialData?.name || "",
        scientificName: initialData?.scientificName || "",
        plantType: initialData?.tags?.[0]?.name || "",
        description: initialData?.zones || "",
        sunlight: "",
        water: "",
        spacing: "",
        growZone: initialData?.zones || "",
        season: "",
        difficulty: "",
        careGuide: "",
        bloomSeason: "",
        addLink: "",
        tags: initialData?.tags?.map(t => t.name).join(", ") || "",
    });

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles([...selectedFiles, ...files]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        setSelectedFiles([...selectedFiles, ...files]);
    };

    const handleSubmit = () => {
        console.log("Form data:", formData);
        console.log("Files:", selectedFiles);
        toast.success("Plant added successfully!");
    };

    return (
        <div className=" bg-[#f3f2ee] p-6 md:p-10">
            <div className="mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

                {/* ── Header ── */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                    <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">{initialData ? "Edit Plant" : "Add Plant"}</h1>
                        <p className="text-sm text-gray-500">{initialData ? "Update plant information" : "Add a new plant to the database"}</p>
                    </div>
                </div>

                {/* ── Basic Information ── */}
                <div className="mb-8">
                    <h2 className="text-sm font-bold text-gray-900 mb-4">Basic Information</h2>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5">Common Name*</label>
                            <input
                                type="text"
                                name="commonName"
                                placeholder="English Rose"
                                value={formData.commonName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5">Scientific Name*</label>
                            <input
                                type="text"
                                name="scientificName"
                                placeholder="Rosa anglica"
                                value={formData.scientificName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5">Plant Type*</label>
                            <input
                                type="text"
                                name="plantType"
                                value={formData.plantType}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5">Description</label>
                            <input
                                type="text"
                                name="description"
                                placeholder="(USDA) Zones"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Photos ── */}
                <div className="mb-8">
                    <h2 className="text-sm font-bold text-gray-900 mb-4">Photos</h2>
                    <div
                        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${isDragging ? "border-green-400 bg-green-50" : "border-gray-200 bg-gray-50"
                            }`}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleDrop}
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">Drop images here or click to upload</p>
                            <p className="text-xs text-gray-400 mb-4">Max size: 5MB • JPG, PNG, GIF, WebP allowed</p>
                            <input
                                type="file"
                                id="file-upload"
                                multiple
                                accept="image/*"
                                onChange={handleFileSelect}
                                className="hidden"
                            />
                            <label
                                htmlFor="file-upload"
                                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                            >
                                Choose Files
                            </label>
                        </div>
                        {selectedFiles.length > 0 && (
                            <div className="mt-4 text-left">
                                <p className="text-xs text-gray-500 mb-2">{selectedFiles.length} file(s) selected:</p>
                                {selectedFiles.map((file, i) => (
                                    <p key={i} className="text-xs text-gray-600">• {file.name}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* ── Growing Conditions ── */}
                <div className="mb-8">
                    <h2 className="text-sm font-bold text-gray-900 mb-4">Growing Conditions</h2>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5 flex items-center gap-1.5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                                Sunlight
                            </label>
                            <input
                                type="text"
                                name="sunlight"
                                placeholder="Water"
                                value={formData.sunlight}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5 flex items-center gap-1.5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 16.5V22.5M4.5 12H3m19.5 0H21m-3.75-7.5 1.06 1.06M6.75 17.25l-1.06 1.06m0-10.5L6.75 6.75m10.5 10.5 1.06 1.06M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
                                </svg>
                                Spacing
                            </label>
                            <input
                                type="text"
                                name="spacing"
                                value={formData.spacing}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5 flex items-center gap-1.5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                                </svg>
                                Difficulty
                            </label>
                            <input
                                type="text"
                                name="difficulty"
                                value={formData.difficulty}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5 flex items-center gap-1.5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                Grow Zone
                            </label>
                            <input
                                type="text"
                                name="growZone"
                                value={formData.growZone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5 flex items-center gap-1.5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg>
                                Season
                            </label>
                            <input
                                type="text"
                                name="season"
                                value={formData.season}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5 flex items-center gap-1.5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                                </svg>
                                Difficulty
                            </label>
                            <input
                                type="text"
                                name="difficulty2"
                                value={formData.difficulty}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Care Guide ── */}
                <div className="mb-8">
                    <h2 className="text-sm font-bold text-gray-900 mb-4">Care Guide</h2>
                    <textarea
                        name="careGuide"
                        rows={4}
                        value={formData.careGuide}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
                    />

                    <div className="mt-4">
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Bloom Season</label>
                        <div className="flex gap-2">
                            {["Spring", "Summer", "Fall", "Winter"].map((season) => (
                                <button
                                    key={season}
                                    onClick={() => setFormData({ ...formData, bloomSeason: season })}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${formData.bloomSeason === season
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                >
                                    {season}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Shopping From ── */}
                <div className="mb-8">
                    <h2 className="text-sm font-bold text-gray-900 mb-4">Shopping From</h2>

                    <div className="mb-4">
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Add Link</label>
                        <input
                            type="url"
                            name="addLink"
                            value={formData.addLink}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Tags (comma-separated)</label>
                        <input
                            type="text"
                            name="tags"
                            placeholder="Beginner, classic, border"
                            value={formData.tags}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* ── Action Buttons ── */}
                <div className="flex gap-3 pt-6 border-t border-gray-100">
                    <button
                        onClick={handleSubmit}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-2.5 bg-[#1a3a2a] hover:bg-[#14301f] text-white font-semibold rounded-lg transition-colors"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        {initialData ? "Save Changes" : "Upload"}
                    </button>
                    <button
                        onClick={onBack}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-2.5 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    );
}