import Navigation from '@/components/navigation/Navigation';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import useUIConfig from '@/hooks/useUIConfig';

const metadata = {
         '/': { title:         'Home', description: 'Andromeda Landing Page' },
    '/store': { title:        'Store', description: 'Fashion out of this world' },
    '/ships': { title:   'Spaceships', description: 'Welcome to Space Fleet' },
  '/explore': { title: 'Solar System', description: 'Lost my way home while exploring the Galaxy' },
     '/user': { title:  'User Portal', description: 'Welcome Home' },
         '*': { title:  ' Error Page', description: 'Page not found' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { pathname, prevPath, background } = useUIConfig();
  const { title, description } = metadata[pathname as keyof typeof metadata] || metadata['*'];

  const isShipRoute = pathname.startsWith('/ships/') && prevPath.startsWith('/ships/');
  const key = isShipRoute ? 'ships' : pathname;

  return (
    <>
      <Navigation />
      <Header />
      <AnimatePresence mode='popLayout'>
        <motion.main
          id='main'
          key={key}
          initial={{ opacity: 0, y: '-150px' }}
          animate={{ opacity: 1, y: 0, background }}
             exit={{ opacity: 0, y: '150px' }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
        >
          <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
          </Helmet>
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
