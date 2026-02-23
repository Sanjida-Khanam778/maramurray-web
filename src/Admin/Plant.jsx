import { useState } from "react";
import toast from "react-hot-toast";
import { Edit3, Plus, Search } from "lucide-react";
import { MdDelete } from "react-icons/md";
import AddPlantForm from "./AddPlant";
import plant2 from '../assets/images/plant2.png';
import plant3 from '../assets/images/plant3.png';
import plant4 from '../assets/images/plant4.png';

function Plant() {
    const [plants, setPlants] = useState([
        {
            id: 1,
            name: "English Rose",
            scientificName: "Rosa anglica",
            image: plant2,
            tags: [{ name: "Flower", color: "bg-green-100 text-green-700" }],
            zones: "Zones 5-9",
            gardensCount: 254,
        },
        {
            id: 2,
            name: "Japanese Maple",
            scientificName: "Acer palmatum",
            image: plant4,
            tags: [{ name: "Tree", color: "bg-green-100 text-green-700" }],
            zones: "Zones 5-8",
            gardensCount: 512,
        },
        {
            id: 3,
            name: "Lavender",
            scientificName: "Lavandula angustifolia",
            image: plant3,
            tags: [{ name: "Shrub", color: "bg-green-100 text-green-700" }],
            zones: "Zones 5-9",
            gardensCount: 892,
        },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [view, setView] = useState("list"); // 'list' or 'form'
    const [editingPlant, setEditingPlant] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [plantToDelete, setPlantToDelete] = useState(null);

    const handleDeleteClick = (plant) => {
        setPlantToDelete(plant);
        setIsDeleteModalOpen(true);
    };
    const filteredPlants = plants.filter(
        (plant) =>
            plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    const confirmDelete = () => {
        if (plantToDelete) {
            setPlants(plants.filter(p => p.id !== plantToDelete.id));
            toast.success("Plant deleted successfully!");
            setIsDeleteModalOpen(false);
            setPlantToDelete(null);
        }
    };

    const handleAddClick = () => {
        setEditingPlant(null);
        setView("form");
    };

    const handleEditClick = (plant) => {
        setEditingPlant(plant);
        setView("form");
    };

    const handleBack = () => {
        setEditingPlant(null);
        setView("list");
    };

    if (view === "form") {
        return <AddPlantForm initialData={editingPlant} onBack={handleBack} />;
    }

    return (
        <div className="bg-[#F5F3ED] min-h-screen p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1F2D16] mb-2">
                        Plant Database
                    </h1>
                    <p className="text-[#7E876F]">Manage and monitor all user accounts</p>
                </div>
                <button
                    onClick={handleAddClick}
                    className="mt-4 md:mt-0 bg-[#1F2D16] hover:bg-[#0c1610] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 transition-colors"
                >
                    <Plus size={20} />
                    Add New Plant
                </button>
            </div>

            <div className="mb-8">
                <div>
                    <div className="relative bg-white p-4 rounded-lg shadow-sm">
                        <Search className="absolute left-8 top-8 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search plants..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f]"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlants.map((plant) => (
                    <div
                        key={plant.id}
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="relative h-56 bg-gray-200 overflow-hidden">
                            <img
                                src={plant.image}
                                alt={plant.name}
                                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                            />
                        </div>

                        <div className="p-4 flex flex-col justify-between ">
                            <div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[18px] font-bold text-[#1F1F1F] mb-1">
                                        {plant.name}
                                    </h3>

                                    <button
                                        onClick={() => handleDeleteClick(plant)}
                                        className="cursor-pointer bg-[#FF000080] hover:bg-red-600 text-white rounded-full p-2 transition-colors"
                                    >
                                        <MdDelete size={20} />
                                    </button>
                                </div>

                                <p className="text-gray-500 text-[14px] mb-3">
                                    {plant.scientificName}
                                </p>

                                <div className="flex gap-2 flex-wrap mb-3">
                                    {plant.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className={`text-xs font-semibold px-3 py-1 rounded-full ${tag.color}`}
                                        >
                                            {tag.name}
                                        </span>
                                    ))}

                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                                        {plant.zones}
                                    </span>
                                </div>
                            </div>

                            <div className="border-t pt-3 border-gray-200 mt-5 flex items-center justify-between">
                                <p className="text-sm text-gray-600">
                                    Used in {plant.gardensCount} gardens
                                </p>

                                <button
                                    onClick={() => handleEditClick(plant)}
                                    className="flex cursor-pointer items-center gap-2 font-semibold text-gray-700 transition-transform duration-300 hover:scale-105"
                                >
                                    <Edit3 size={16} />
                                    Edit Plant
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl p-8 max-w-xl w-full mx-4 shadow-2xl transform transition-all">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Delete Plant?</h2>
                        <p className="text-gray-500 mb-4 leading-relaxed">
                            This will permanently delete this Plant. This action cannot be undone.
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setIsDeleteModalOpen(false)}
                                className="px-6 py-1 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all hover:scale-105"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-6 py-1 bg-[#FF0000] text-white font-semibold rounded-xl hover:bg-red-700 transition-all hover:scale-105 shadow-lg shadow-red-200"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Plant;
