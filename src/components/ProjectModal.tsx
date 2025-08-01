import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaBuilding,
  FaTimes,
  FaFileAlt,
  FaCalendarAlt,
  FaHome,
  FaDollarSign,
} from "react-icons/fa";

interface ProjectModalProps {
  selectedProject: {
    _id: string;
    name: string;
    description: string;
    projectType: string;
    status: string;
    location: {
      address: string;
      city: string;
      state: string;
      zipCode?: string;
    };
    estimatedCompletionDate?: string;
    totalUnits?: number;
    priceRange?: { min: number; max: number };
    features: string[];
    images: { url: string; caption?: string }[];
    createdAt: string;
    updatedAt: string;
  } | null;
  setSelectedProject: (project: any) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  selectedProject,
  setSelectedProject,
}) => {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    caption?: string;
  } | null>(null);

  const API_BASE_URL = import.meta.env.VITE_APP_API_URL || "/api";
  const BASE_URL = API_BASE_URL.replace("/api", "") || "http://localhost:3000";

  if (!selectedProject) return null;

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          className="bg-white rounded-2xl w-full max-w-7xl h-[95vh] sm:h-[90vh] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Close Button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setSelectedProject(null)}
              className="bg-white/90 backdrop-blur-sm text-gray-700 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl"
              aria-label="Close modal"
            >
              <FaTimes className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Mobile Layout - Column */}
          <div className="flex flex-col h-full lg:hidden">
            {/* Hero Image Section */}
            <div className="relative h-64 sm:h-80">
              <img
                src={`${selectedProject.images[0]?.url}`}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              {/* Project Info Overlay - Simplified */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <span className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
                    {selectedProject.projectType}
                  </span>
                  <span className="px-2 py-1 sm:px-3 sm:py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
                    {selectedProject.status}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  {selectedProject.name}
                </h2>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {/* Description Section */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <FaFileAlt className="text-purple-600 text-lg sm:text-xl" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    About This Project
                  </h3>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-purple-100">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              {/* Location Section */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <FaMapMarkerAlt className="text-blue-600 text-lg sm:text-xl" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Location
                  </h3>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <p className="text-gray-700 text-base sm:text-lg">
                    {`${selectedProject.location.address}, ${selectedProject.location.city}, ${selectedProject.location.state}${selectedProject.location.zipCode ? `, ${selectedProject.location.zipCode}` : ""}`}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Project Details
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {/* Project Type */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-blue-100">
                    <div className="flex items-center gap-3 mb-2">
                      <FaBuilding className="text-blue-600 text-lg sm:text-xl" />
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                        Project Type
                      </h4>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-blue-600">
                      {selectedProject.projectType}
                    </p>
                  </div>
                  {/* Status */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border border-green-100">
                    <div className="flex items-center gap-3 mb-2">
                      <FaStar className="text-green-600 text-lg sm:text-xl" />
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                        Status
                      </h4>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-green-600">
                      {selectedProject.status}
                    </p>
                  </div>
                  {/* Estimated Completion Date */}
                  {selectedProject.estimatedCompletionDate && (
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 sm:p-6 border border-yellow-100">
                      <div className="flex items-center gap-3 mb-2">
                        <FaCalendarAlt className="text-yellow-600 text-lg sm:text-xl" />
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                          Estimated Completion
                        </h4>
                      </div>
                      <p className="text-xl sm:text-2xl font-bold text-yellow-600">
                        {formatDate(selectedProject.estimatedCompletionDate)}
                      </p>
                    </div>
                  )}
                  {/* Total Units */}
                  {selectedProject.totalUnits !== undefined && (
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border border-purple-100">
                      <div className="flex items-center gap-3 mb-2">
                        <FaHome className="text-purple-600 text-lg sm:text-xl" />
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                          Total Units
                        </h4>
                      </div>
                      <p className="text-xl sm:text-2xl font-bold text-purple-600">
                        {selectedProject.totalUnits}
                      </p>
                    </div>
                  )}
                  {/* Price Range */}
                  {selectedProject.priceRange && (
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 sm:p-6 border border-emerald-100">
                      <div className="flex items-center gap-3 mb-2">
                        <FaDollarSign className="text-emerald-600 text-lg sm:text-xl" />
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                          Price Range
                        </h4>
                      </div>
                      <p className="text-xl sm:text-2xl font-bold text-emerald-600">
                        ${selectedProject.priceRange.min.toLocaleString()} - $
                        {selectedProject.priceRange.max.toLocaleString()}
                      </p>
                    </div>
                  )}
                  {/* Features */}
                  {selectedProject.features &&
                    selectedProject.features.length > 0 && (
                      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4 sm:p-6 border border-indigo-100">
                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                          <FaBuilding className="text-indigo-600 text-lg sm:text-xl" />
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                            Features
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 sm:px-3 sm:py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs sm:text-sm font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              </div>

              {/* Image Gallery */}
              {selectedProject.images.length > 1 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {selectedProject.images.slice(1).map((image, index) => (
                      <div
                        key={index}
                        className="relative cursor-pointer group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={`${BASE_URL}/${image.url.replace(/\\/g, "/")}`}
                          alt={image.caption || `Project image ${index + 2}`}
                          className="h-24 sm:h-32 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                        {image.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                            <p className="text-white text-xs sm:text-sm font-medium truncate">
                              {image.caption}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Timeline */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Project Timeline
                </h3>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Created:</span>
                      <span className="font-medium">
                        {formatDate(selectedProject.createdAt)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Last Updated:</span>
                      <span className="font-medium">
                        {formatDate(selectedProject.updatedAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Row */}
          <div className="hidden lg:flex h-full">
            {/* Left Side - Hero Image */}
            <div className="w-1/2 relative">
              <img
                src={`${selectedProject.images[0]?.url}`}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              {/* Project Info Overlay - Simplified */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-sm font-medium">
                    {selectedProject.projectType}
                  </span>
                  <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-sm font-medium">
                    {selectedProject.status}
                  </span>
                </div>
                <h2 className="text-4xl font-bold">{selectedProject.name}</h2>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-1/2 flex flex-col">
              <div className="flex-1 overflow-y-auto p-8">
                {/* Description Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <FaFileAlt className="text-purple-600 text-xl" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      About This Project
                    </h3>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* Location Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Location
                    </h3>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-gray-700 text-lg">
                      {`${selectedProject.location.address}, ${selectedProject.location.city}, ${selectedProject.location.state}${selectedProject.location.zipCode ? `, ${selectedProject.location.zipCode}` : ""}`}
                    </p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Project Details
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {/* Project Type */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <div className="flex items-center gap-3 mb-2">
                        <FaBuilding className="text-blue-600 text-xl" />
                        <h4 className="text-lg font-semibold text-gray-900">
                          Project Type
                        </h4>
                      </div>
                      <p className="text-2xl font-bold text-blue-600">
                        {selectedProject.projectType}
                      </p>
                    </div>
                    {/* Status */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <div className="flex items-center gap-3 mb-2">
                        <FaStar className="text-green-600 text-xl" />
                        <h4 className="text-lg font-semibold text-gray-900">
                          Status
                        </h4>
                      </div>
                      <p className="text-2xl font-bold text-green-600">
                        {selectedProject.status}
                      </p>
                    </div>
                    {/* Estimated Completion Date */}
                    {selectedProject.estimatedCompletionDate && (
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                        <div className="flex items-center gap-3 mb-2">
                          <FaCalendarAlt className="text-yellow-600 text-xl" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            Estimated Completion
                          </h4>
                        </div>
                        <p className="text-2xl font-bold text-yellow-600">
                          {formatDate(selectedProject.estimatedCompletionDate)}
                        </p>
                      </div>
                    )}
                    {/* Total Units */}
                    {selectedProject.totalUnits !== undefined && (
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                        <div className="flex items-center gap-3 mb-2">
                          <FaHome className="text-purple-600 text-xl" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            Total Units
                          </h4>
                        </div>
                        <p className="text-2xl font-bold text-purple-600">
                          {selectedProject.totalUnits}
                        </p>
                      </div>
                    )}
                    {/* Price Range */}
                    {selectedProject.priceRange && (
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                        <div className="flex items-center gap-3 mb-2">
                          <FaDollarSign className="text-emerald-600 text-xl" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            Price Range
                          </h4>
                        </div>
                        <p className="text-2xl font-bold text-emerald-600">
                          ${selectedProject.priceRange.min.toLocaleString()} - $
                          {selectedProject.priceRange.max.toLocaleString()}
                        </p>
                      </div>
                    )}
                    {/* Features */}
                    {selectedProject.features &&
                      selectedProject.features.length > 0 && (
                        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                          <div className="flex items-center gap-3 mb-4">
                            <FaBuilding className="text-indigo-600 text-xl" />
                            <h4 className="text-lg font-semibold text-gray-900">
                              Features
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.features.map((feature, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </div>

                {/* Image Gallery */}
                {selectedProject.images.length > 1 && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Gallery
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.images.slice(1).map((image, index) => (
                        <div
                          key={index}
                          className="relative cursor-pointer group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => setSelectedImage(image)}
                        >
                          <img
                            src={`${BASE_URL}/${image.url.replace(/\\/g, "/")}`}
                            alt={image.caption || `Project image ${index + 2}`}
                            className="h-32 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                          {image.caption && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                              <p className="text-white text-sm font-medium truncate">
                                {image.caption}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Timeline */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Project Timeline
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Created:</span>
                        <span className="font-medium">
                          {formatDate(selectedProject.createdAt)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Last Updated:</span>
                        <span className="font-medium">
                          {formatDate(selectedProject.updatedAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Image Sub-Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-60 p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={`${BASE_URL}/${selectedImage.url.replace(/\\/g, "/")}`}
                  alt={selectedImage.caption}
                  className="w-full max-h-[70vh] object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm text-gray-700 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg"
                  aria-label="Close image modal"
                >
                  <FaTimes className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
              </div>
              {selectedImage.caption && (
                <div className="p-4 sm:p-6 bg-gray-50">
                  <p className="text-center text-gray-700 text-base sm:text-lg font-medium">
                    {selectedImage.caption}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectModal;
