import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { FaStar } from 'react-icons/fa';
import herosection from "../assets/service.image1.jpg";
import axios from "axios";

// interface Testimonial {
//     text: string;
//     author: string;
//     position: string;
// }

interface Project {
  _id: string;
  name: string;
  description: string;
  status: string;
  projectType: string;
  features: string[];
  location: {
    address: string;
    city: string;
    state: string;
    zipCode?: string;
  };
  estimatedCompletionDate?: string;
  totalUnits?: number;
  priceRange?: { min: number; max: number };
  images: {
    url: string;
    caption?: string;
    _id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

const Project = () => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_BASE_URL}/api/v1/projects`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchProject();
  }, []);

  const filteredProjects = projects.filter(
    (project) =>
      filter === "all" ||
      project.projectType.toLowerCase() === filter.toLowerCase() ||
      project.status.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="relative h-[60vh] bg-gray-900 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${herosection})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Our Success Stories
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover our portfolio of successful projects and see how we've
            helped our clients achieve their goals.
          </motion.p>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "all",
              "Commercial",
              "Residential",
              "Mixed-Use",
              "Industrial",
            ].map((type) => (
              <motion.button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${filter === type ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => navigate(`/projects/${project._id}`)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`${project.images[0]?.url}`}
                    alt={project.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {project.projectType}
                    </span>
                    <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/projects/${project._id}`);
                    }}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="h-2.5 w-2.5 bg-tertiary rounded-full animate-pulse"></span>
                            <span className="text-tertiary font-semibold tracking-wide text-sm">TESTIMONIALS</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                        <div className="w-24 h-1 bg-tertiary mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => project.testimonial && (
                            <motion.div
                                key={project.id}
                                className="bg-gray-50 p-8 rounded-2xl shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center gap-1 text-tertiary mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="w-5 h-5" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">{project.testimonial.text}</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="text-xl font-bold text-primary">
                                            {project.testimonial.author.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{project.testimonial.author}</h4>
                                        <p className="text-sm text-gray-600">{project.testimonial.position}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}
    </div>
  );
};

export default Project;
