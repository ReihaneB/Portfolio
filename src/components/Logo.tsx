import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Logo(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-center flex-wrap">
      <motion.button
        whileHover={{ scale: 0.95 }}
        transition={{ duration: 0.05, ease: [0.6, 0.01, -0.05, 0.9] }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-20 w-20 border-solid border-2 border-[#89db84] rounded-full flex justify-center items-center duration-500"
      >
        <h1>rb.</h1>
      </motion.button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
            className="mt-24 absolute px-4 py-3 w-fit bg-[#89db84] rounded-full text-white"
          >
            Actuellement disponible
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
