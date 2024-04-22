import Navigation from '@/components/navigation/Navigation';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const background = pathname === '/ships' ? 'linear-gradient(to bottom, rgba(30, 72, 109, 0.6), rgba(25, 57, 94, 0.9))' : ''

  return (
    <>
      <Navigation />
      <Header />
      <AnimatePresence mode='popLayout'>
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: '-100px' }}
          animate={{ opacity: 1, y: 0  }}
          exit={{ opacity: 0, y: '100px' }}
          transition={{ type: 'spring', ease: 'linear', stiffness: 100, duration: 0.5 }}
          style={{ background }}
          >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
