import React from "react";
import { motion } from "framer-motion";

const ErrorPage = ({ error, resetError }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-500">
            Oops! Something went wrong
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 text-lg mb-8 leading-relaxed"
        >
          We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
        </motion.p>

        {error && (
          <motion.details
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 text-left bg-gray-800/50 rounded-lg p-4 border border-gray-700"
          >
            <summary className="text-cyan-400 cursor-pointer font-medium mb-2">
              Error Details
            </summary>
            <pre className="text-red-400 text-sm whitespace-pre-wrap break-words">
              {error.toString()}
            </pre>
          </motion.details>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Refresh Page
          </button>
          {resetError && (
            <button
              onClick={resetError}
              className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-full shadow-lg hover:bg-gray-600 transform hover:scale-105 transition-all duration-300"
            >
              Try Again
            </button>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-500 text-sm mt-8"
        >
          If this error continues, please contact our support team.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
