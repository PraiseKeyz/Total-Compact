import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ 
  isOpen, 
  onClose, 
  message = "Your message has been sent successfully!" 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 transform transition-all">
        {/* Modal Header */}
        <div className="flex items-center justify-center p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <FaCheckCircle className="text-green-500 text-3xl" />
            <h3 className="text-xl font-semibold text-gray-900">Success!</h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <p className="text-gray-600 text-center leading-relaxed">
            {message}
          </p>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-center p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition duration-200 font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal; 