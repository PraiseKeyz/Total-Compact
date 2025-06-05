import { motion } from 'framer-motion';

interface ProjectModalProps {
    selectedProject: any; // Replace 'any' with a more specific type if you have one
    setSelectedProject: (project: any) => void; // Or (project: Project | null) => void; if it can be null
  }

const ProjectModal: React.FC<ProjectModalProps> = ({selectedProject, setSelectedProject}) =>{
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <motion.div 
            className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
        >
            <div className="relative">
                <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                />
                <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 cursor-pointer bg-primary/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/70 transition-colors"
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
            <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">{selectedProject.type}</span>
                    <span className="px-4 py-2 bg-tertiary/10 text-tertiary rounded-full">{selectedProject.service}</span>
                </div>
                
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Objectives</h3>
                        <p className="text-gray-600">{selectedProject.objectives}</p>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Process</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedProject.process.map((step: any, index: any) => (
                                <div 
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                                >
                                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                                        {index + 1}
                                    </div>
                                    <span className="text-gray-700">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Outcome</h3>
                        <p className="text-gray-600">{selectedProject.outcome}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>  
    )
}

export default ProjectModal;