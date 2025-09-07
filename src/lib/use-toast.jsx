import React, { createContext, useContext, useState, useCallback } from 'react';

// 1. Create the context for the toast
const ToastContext = createContext(null);

// 2. Create a provider component
export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000); // Toast disappears after 3 seconds
  }, []);

  const hideToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </ToastContext.Provider>
  );
};

// 3. Create the custom hook to use the toast functionality
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// 4. Create the actual Toast component that will be displayed
const toastStyles = {
  info: 'bg-blue-500 border-blue-600',
  success: 'bg-green-500 border-green-600',
  warning: 'bg-yellow-500 border-yellow-600',
  error: 'bg-red-500 border-red-600',
};

const Toast = ({ message, type, onClose }) => {
  const baseStyle = 'fixed bottom-5 right-5 text-white py-3 px-5 rounded-lg shadow-xl border-2 animate-fade-in';
  const typeStyle = toastStyles[type] || toastStyles.info;

  return (
    <div className={`${baseStyle} ${typeStyle}`}>
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white font-bold">
          &times;
        </button>
      </div>
    </div>
  );
};
