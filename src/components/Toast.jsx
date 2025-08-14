"use client";

import { useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

export function Toast({ message, isVisible, onClose, type = "success" }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto close after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const getToastStyles = () => {
    switch (type) {
      case "success":
        return "bg-gradient-to-r from-green-600 to-green-700 border-green-500";
      case "error":
        return "bg-gradient-to-r from-red-600 to-red-700 border-red-500";
      default:
        return "bg-gradient-to-r from-gray-700 to-gray-800 border-gray-600";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle size={20} className="text-green-200" />;
      case "error":
        return <X size={20} className="text-red-200" />;
      default:
        return <CheckCircle size={20} className="text-gray-200" />;
    }
  };

  return (
    <div className="fixed top-20 right-4 z-[60] animate-in slide-in-from-right duration-300">
      <div
        className={`${getToastStyles()} text-white px-4 py-3 rounded-lg shadow-lg border backdrop-blur-sm min-w-[300px] transform transition-all duration-300 hover:scale-105`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {getIcon()}
            <span className="text-sm font-medium">{message}</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white transition-colors duration-200 hover:rotate-90 transform"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
