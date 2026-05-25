import React from 'react';

const Gallery = () => {
  const photos = [
    {
      id: 1,
      src: '/assets/photo1.jpg',
      alt: 'Tutor Teaching Session'
    },
    {
      id: 2,
      src: '/assets/photo2.jpg',
      alt: 'Tutor with Students'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Meet Your Tutor
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional educator dedicated to helping students succeed in their academic journey
          </p>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {photos.map((photo) => (
            <div 
              key={photo.id}
              className="group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 overflow-hidden relative">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-8">
                        <svg class="w-20 h-20 text-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                        <p class="text-gray-400 font-medium">${photo.alt}</p>
                        <p class="text-gray-300 text-sm mt-2">Drop image: ${photo.src}</p>
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-700 font-semibold text-center">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Setup Instructions */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-sm text-blue-800 text-center">
            <span className="font-semibold">📸 Setup Instructions:</span> Add your photos to <code className="bg-blue-100 px-2 py-1 rounded">public/assets/photo1.jpg</code> and <code className="bg-blue-100 px-2 py-1 rounded">public/assets/photo2.jpg</code>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
