import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import project1 from '../assets/service.image1.jpg';
import project2 from '../assets/service.image1.jpg';
import project3 from '../assets/service.image1.jpg';
import ProjectModal from '../components/ProjectModal';

interface Testimonial {
    text: string;
    author: string;
    position: string;
}

interface Project {
    id: number;
    title: string;
    type: string;
    service: string;
    image: string;
    objectives: string;
    process: string[];
    outcome: string;
    testimonial: Testimonial;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Modern Office Complex',
        type: 'Commercial',
        service: 'Real Estate Development',
        image: project1,
        objectives: 'Create a sustainable, modern office space that promotes productivity and well-being.',
        process: ['Site Analysis', 'Design Development', 'Construction Management', 'Quality Assurance'],
        outcome: 'A LEED-certified building with 95% occupancy rate within 3 months of completion.',
        testimonial: {
            text: 'The team delivered beyond our expectations, creating a space that truly embodies our corporate vision.',
            author: 'John Smith',
            position: 'CEO, Tech Solutions Inc.'
        }
    },
    {
        id: 2,
        title: 'Luxury Residential Complex',
        type: 'Residential',
        service: 'Property Management',
        image: project2,
        objectives: 'Develop an exclusive residential complex with premium amenities and sustainable features.',
        process: ['Market Research', 'Architectural Planning', 'Development', 'Property Management Setup'],
        outcome: 'Successfully launched and fully occupied within 6 months, with high tenant satisfaction rates.',
        testimonial: {
            text: 'Outstanding attention to detail and commitment to quality throughout the entire project.',
            author: 'Sarah Johnson',
            position: 'Property Manager'
        }
    },
    {
        id: 3,
        title: 'Smart City Integration',
        type: 'Commercial',
        service: 'Real Estate Development',
        image: project3,
        objectives: 'Implement smart technology solutions across existing commercial properties.',
        process: ['Technology Assessment', 'Infrastructure Planning', 'Implementation', 'System Integration'],
        outcome: 'Reduced operating costs by 30% and improved tenant satisfaction by 45%.',
        testimonial: {
            text: 'Their innovative approach to smart building solutions has transformed our properties.',
            author: 'Michael Chen',
            position: 'Director of Operations'
        }
    }
];

const Project = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = projects.filter(project => 
        filter === 'all' || project.type.toLowerCase() === filter.toLowerCase() || 
        project.service.toLowerCase().includes(filter.toLowerCase())
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
                        backgroundImage: `url(${project1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
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
                        Discover our portfolio of successful projects and see how we've helped our clients achieve their goals.
                    </motion.p>
                </div>
            </motion.section>

            {/* Filter Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {['all', 'Commercial', 'Residential', 'Real Estate Development', 'Property Management'].map((type) => (
                            <motion.button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${filter === type ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
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
                                key={project.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{project.type}</span>
                                        <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full">{project.service}</span>
                                    </div>
                                    <p className="text-gray-600 line-clamp-3">{project.objectives}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-white">
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
            </section>

            {/* Modal */}
            {selectedProject && ( <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
)}
        </div>
    );
};

export default Project;