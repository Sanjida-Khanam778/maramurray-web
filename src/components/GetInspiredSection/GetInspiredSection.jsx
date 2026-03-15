import React from 'react';
import image1 from '../../assets/images/get1.png'
import image2 from '../../assets/images/get2.png'
import image3 from '../../assets/images/get3.png'
import image4 from '../../assets/images/get4.png'
export default function GetInspiredSection() {
  const gardens = [
    {
      id: 1,
      title: 'Modern Minimalist Patio',
      author: 'Emma',
      image: image1
    },
    {
      id: 2,
      title: 'Courtyard Oasis',
      author: 'David',
      image: image2
    },
    {
      id: 3,
      title: 'Succulent Garden',
      author: 'Rachel',
      image: image3
    },
    {
      id: 4,
      title: 'Backyard Paradise',
      author: 'James',
      image: image4
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
     

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
         Join the Florle Community and Get Inspired
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
          Browse thousands of shared designs from gardeners like you. Share your own designs, get connected and inspire others.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Let‘s Bloom together</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gardens.map((garden) => (
            <div
              key={garden.id}
              className="group cursor-pointer transition-all duration-300"
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={garden.image}
                    alt={garden.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                    {garden.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    by <span className="font-medium text-gray-700">{garden.author}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: View More Button */}
      
      </div>
    </div>
  );
}