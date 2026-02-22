import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, X } from 'lucide-react';

const StatusModal = ({ isOpen, onClose, type = "success", message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-[2.5rem] p-8 md:p-12 max-w-sm w-full shadow-2xl overflow-hidden"
          >
            {/* Background Decoration */}
            <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-10 rounded-full -mr-16 -mt-16 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`} />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center">
              <div className={`w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center ${type === 'success' ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
                {type === 'success' ? <CheckCircle2 size={40} /> : <XCircle size={40} />}
              </div>
              
              <h3 className="text-2xl font-black text-blue-900 mb-4 font-display">
                {type === 'success' ? 'Success!' : 'Oops! Something went wrong'}
              </h3>
              
              <p className="text-slate-600 mb-8 leading-relaxed font-body">
                {message || (type === 'success' ? 'Your message has been sent successfully. We will get back to you shortly.' : 'Please try again later or contact us directly.')}
              </p>
              
              <button
                onClick={onClose}
                className={`w-full py-4 rounded-2xl font-bold transition-all shadow-lg ${type === 'success' ? 'bg-green-500 hover:bg-green-600 text-white shadow-green-500/20' : 'bg-red-500 hover:bg-red-600 text-white shadow-red-500/20'}`}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StatusModal;
