import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-blue-950 overflow-hidden">
      {/* Background Micro-Animations */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="flex flex-col items-center gap-10 relative z-10">
        {/* Logo Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <img 
            src={`${import.meta.env.BASE_URL}images/logo.png`} 
            alt="Stranum Energies" 
            className="w-48 md:w-60 h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Industrial Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-white/5 rounded-full" />
          <motion.div
            className="absolute inset-0 border-4 border-orange-500 border-t-transparent rounded-full shadow-[0_0_15px_rgba(249,115,22,0.3)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          {/* Inner pulse */}
          <motion.div 
            className="absolute inset-4 bg-orange-500/10 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Brand Indicators */}
        <div className="flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white font-black text-xs uppercase tracking-[0.4em] mb-2"
          >
            Stranum Energies
          </motion.span>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 bg-orange-500 rounded-full mb-3"
          />
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.8 }}
            className="text-blue-100 text-[10px] uppercase tracking-[0.2em] font-bold"
          >
            Structured Energy. Disciplined Execution.
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
