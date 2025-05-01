import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-tertiary">404</h1>
          <h2 className="text-4xl font-semibold text-gray-800 mt-8">Page Not Found</h2>
          <p className="text-gray-600 mt-4 text-lg">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-md">
              <span className="font-semibold text-tertiary">Note:</span> This website is currently a demo version. Only the homepage is functional at this time. Other links and features are for demonstration purposes only.
            </p>
          </div>
          <Link 
            to="/" 
            className="inline-block mt-8 px-8 py-3 bg-tertiary text-white rounded-lg hover:bg-tertiary/90 transition-colors duration-300"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;