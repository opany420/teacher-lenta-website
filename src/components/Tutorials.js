import React from 'react';
import { tutorials } from '../data/content';

export default function Tutorials() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Video Tutorials
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Learn from my curated collection of educational videos
          </p>
          <a
            href="https://youtube.com/@TeacherLenta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-red-600 hover:text-red-700 font-semibold text-lg transition"
          >
            Subscribe to my YouTube channel →
          </a>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* YouTube Iframe */}
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${tutorial.id}`}
                  title={tutorial.title}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>

              {/* Video Title */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {tutorial.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* No Videos Message */}
        {tutorials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Video tutorials coming soon! Check back later.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
