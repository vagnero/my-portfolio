import { motion, AnimatePresence } from "framer-motion";

interface PageWrapperProps {
  language: string;
  children: React.ReactNode;
}

export const PageWrapper = ({ language, children }: PageWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language} // força re-render/animacao toda vez que idioma mudar
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
