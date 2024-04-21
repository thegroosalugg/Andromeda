import Navigation from '@/components/navigation/Navigation';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  return (
    <>
      <Navigation />
      <Header />
      <AnimatePresence mode='wait'>
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0  }}
          exit={{ opacity: 0, y: 50  }}
          transition={{ type: 'easeInOut' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
