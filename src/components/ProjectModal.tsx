import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

interface ProjectModalProps {
  selectedProject: {
    _id: string;
    name: string;
    description: string;
    projectType: string;
    status: string;
    location: { address: string; city: string; state: string; zipCode?: string };
    priceRange?: { min: number; max: number };
    features: string[];
    images: { url: string; caption: string }[];
  } | null;
  setSelectedProject: (project: any) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ selectedProject, setSelectedProject }) => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null);

  const API_BASE_URL = import.meta.env.VITE_APP_API_URL || '/api';
  const BASE_URL = API_BASE_URL.replace('/api', '') || 'http://localhost:3000';

  if (!selectedProject) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          className="bg-white rounded-xl w-full max-w-5xl h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero Image and Close Button */}
          <div className="relative">
            <img
              src={`${BASE_URL}/${selectedProject.images[0]?.url.replace(/\\/g, '/')}`}
              crossOrigin="anonymous"
              alt={selectedProject.name}
              className="w-full h-96 object-cover rounded-t-xl"
            />
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Project Details */}
          <div className="p-8 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.name}</h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {selectedProject.projectType}
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                  {selectedProject.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Details</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <span className="font-medium">Location:</span>{' '}
                    {`${selectedProject.location.address}, ${selectedProject.location.city}, ${selectedProject.location.state}${
                      selectedProject.location.zipCode ? ` ${selectedProject.location.zipCode}` : ''
                    }`}
                  </li>
                  {selectedProject.priceRange && (
                    <li>
                      <span className="font-medium">Price Range:</span>{' '}
                      ${selectedProject.priceRange.min.toLocaleString()} - $
                      {selectedProject.priceRange.max.toLocaleString()}
                    </li>
                  )}
                  {selectedProject.features.length > 0 && (
                    <li>
                      <span className="font-medium">Features:</span>{' '}
                      {selectedProject.features.join(', ')}
                    </li>
                  )}

                </ul>
              </div>
            </div>

            {/* Image Gallery */}
            {selectedProject.images.length > 1 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedProject.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer group"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={`${BASE_URL}/${image.url.replace(/\\/g, '/')}`}
                        crossOrigin="anonymous"
                        alt={image.caption || `Project image ${index + 2}`}
                        className="h-48 w-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                      />
                      <p className="text-sm text-gray-600 mt-2 truncate">{image.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Image Sub-Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-3xl w-full p-6"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={`${BASE_URL}/${selectedImage.url.replace(/\\/g, '/')}`}
                  crossOrigin="anonymous"
                  alt={selectedImage.caption}
                  className="w-full h-[60vh] object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Close image modal"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-center text-gray-600 mt-4 text-lg">{selectedImage.caption || 'No caption'}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectModal;