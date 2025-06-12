import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ServiceModalProps {
    selectedService: any;
    setSelectedService: (service: any | null) => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ selectedService, setSelectedService }) => {

    useEffect(() => {
        if (selectedService) {
          document.body.style.overflow = 'hidden';
          document.documentElement.style.overflow = 'hidden';
          document.body.style.position = 'fixed'; 
          document.body.style.width = '100%';
        } else {
          document.body.style.overflow = '';
          document.documentElement.style.overflow = '';
          document.body.style.position = '';
          document.body.style.width = '';
        }
      
        return () => {
          document.body.style.overflow = '';
          document.documentElement.style.overflow = '';
          document.body.style.position = '';
          document.body.style.width = '';
        };
      }, [selectedService]);
      

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                                <button 
                        onClick={() => setSelectedService(null)}
                        className="absolute z-60 top-4 right-4 cursor-pointer bg-primary/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/70 transition-colors"
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
            <motion.div 
                className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
            >
                <div className="flex flex-col md:flex-row gap-0 md:gap-5">
                    <img 
                        src={selectedService.image} 
                        alt={selectedService.title}
                        className="w-100 h-full object-cover"
                    />
                    <div className='p-4 mt-auto md:mt-30'>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedService.title}</h2>
                    <p className="text-gray-600 mb-6">{selectedService.description}</p>
                    </div>
                </div>
                <div className="p-8">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Offerings</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {selectedService.offerings.map((offerings: string, index: number) => (
                                    <div key={index} className="flex items-start">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm mr-2">
                                            {index + 1}
                                        </span>
                                        <p className="text-gray-600 text-sm">{offerings}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ServiceModal;