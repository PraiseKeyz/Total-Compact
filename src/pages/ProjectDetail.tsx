import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaStar,
  FaBuilding,
  FaTimes,
  FaFileAlt,
  FaCalendarAlt,
  FaHome,
  FaDollarSign,
  FaArrowLeft,
} from "react-icons/fa";
import axios from "axios";

interface Project {
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
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    caption?: string;
  } | null>(null);

  const API_BASE_URL = import.meta.env.VITE_APP_API_URL || "/api";

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) {
        setError("Project ID is required");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(
          `${API_BASE_URL}/api/v1/projects/${id}`,
        );
        setProject(response.data.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError("Project not found");
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, API_BASE_URL]);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            {error || "The project you are looking for does not exist."}
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`${project.images[0]?.url}`}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Navigation */}
        <div className="relative z-10 p-6">
          <button
            onClick={() => navigate("/projects")}
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-all duration-200"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full p-6 sm:p-8 lg:p-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                {project.projectType}
              </span>
              <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                {project.status}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {project.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <FaFileAlt className="text-purple-600 text-2xl" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    About This Project
                  </h2>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                  <h2 className="text-3xl font-bold text-gray-900">Location</h2>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <p className="text-gray-700 text-xl">
                    {`${project.location.address}, ${project.location.city}, ${project.location.state}${project.location.zipCode ? `, ${project.location.zipCode}` : ""}`}
                  </p>
                </div>
              </div>

              {/* Project Details Grid */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Project Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <FaBuilding className="text-blue-600 text-xl" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Project Type
                      </h3>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">
                      {project.projectType}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                    <div className="flex items-center gap-3 mb-3">
                      <FaStar className="text-green-600 text-xl" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Status
                      </h3>
                    </div>
                    <p className="text-2xl font-bold text-green-600">
                      {project.status}
                    </p>
                  </div>

                  {/* Estimated Completion Date */}
                  {project.estimatedCompletionDate && (
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-100">
                      <div className="flex items-center gap-3 mb-3">
                        <FaCalendarAlt className="text-yellow-600 text-xl" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          Estimated Completion
                        </h3>
                      </div>
                      <p className="text-2xl font-bold text-yellow-600">
                        {formatDate(project.estimatedCompletionDate)}
                      </p>
                    </div>
                  )}

                  {/* Total Units */}
                  {project.totalUnits !== undefined && (
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                      <div className="flex items-center gap-3 mb-3">
                        <FaHome className="text-purple-600 text-xl" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          Total Units
                        </h3>
                      </div>
                      <p className="text-2xl font-bold text-purple-600">
                        {project.totalUnits.toLocaleString()}
                      </p>
                    </div>
                  )}

                  {/* Price Range */}
                  {project.priceRange && (
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 md:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <FaDollarSign className="text-emerald-600 text-xl" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          Price Range
                        </h3>
                      </div>
                      <p className="text-3xl font-bold text-emerald-600">
                        ${project.priceRange.min.toLocaleString()} - $
                        {project.priceRange.max.toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <FaBuilding className="text-indigo-600 text-2xl" />
                    <h2 className="text-3xl font-bold text-gray-900">
                      Features
                    </h2>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
                    <div className="flex flex-wrap gap-3">
                      {project.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Image Gallery */}
              {project.images.length > 1 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Gallery
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.images.slice(1).map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative cursor-pointer group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => setSelectedImage(image)}
                        whileHover={{ y: -5 }}
                      >
                        <img
                          src={`${image.url.replace(/\\/g, "/")}`}
                          alt={image.caption || `Project image ${index + 2}`}
                          className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                        {image.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <p className="text-white text-sm font-medium">
                              {image.caption}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Timeline */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Project Timeline
                </h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                      <span className="text-gray-600 font-medium">
                        Created:
                      </span>
                      <span className="font-semibold text-gray-900">
                        {formatDate(project.createdAt)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                      <span className="text-gray-600 font-medium">
                        Last Updated:
                      </span>
                      <span className="font-semibold text-gray-900">
                        {formatDate(project.updatedAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Quick Info
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-gray-600 text-sm">
                        Project Type
                      </span>
                      <p className="font-semibold text-gray-900">
                        {project.projectType}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Status</span>
                      <p className="font-semibold text-gray-900">
                        {project.status}
                      </p>
                    </div>
                    {project.estimatedCompletionDate && (
                      <div>
                        <span className="text-gray-600 text-sm">
                          Completion Date
                        </span>
                        <p className="font-semibold text-gray-900">
                          {formatDate(project.estimatedCompletionDate)}
                        </p>
                      </div>
                    )}
                    {project.totalUnits !== undefined && (
                      <div>
                        <span className="text-gray-600 text-sm">
                          Total Units
                        </span>
                        <p className="font-semibold text-gray-900">
                          {project.totalUnits.toLocaleString()}
                        </p>
                      </div>
                    )}
                    {project.priceRange && (
                      <div>
                        <span className="text-gray-600 text-sm">
                          Price Range
                        </span>
                        <p className="font-semibold text-gray-900">
                          ${project.priceRange.min.toLocaleString()} - $
                          {project.priceRange.max.toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={`${selectedImage.url.replace(/\\/g, "/")}`}
                alt={selectedImage.caption}
                className="w-full max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg"
                aria-label="Close image modal"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            {selectedImage.caption && (
              <div className="p-6 bg-gray-50">
                <p className="text-center text-gray-700 text-lg font-medium">
                  {selectedImage.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
