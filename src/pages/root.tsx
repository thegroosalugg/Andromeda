import Navigation from '@/components/navigation/Navigation';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import useUIConfig from '@/hooks/useUIConfig';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { pathname, background } = useUIConfig();

  return (
    <>
      <Navigation />
      <Header />
      <AnimatePresence mode='popLayout'>
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: '-80px' }} // *NOTES* temporarily reduced to 80px to stop banner from triggering whileInView during page transition
          animate={{ opacity: 1, y: 0, background }}
          exit={{ opacity: 0, y: '100px' }}
          transition={{ type: 'spring', ease: 'linear', stiffness: 100, damping: 15, duration: 0.5 }}
          >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
