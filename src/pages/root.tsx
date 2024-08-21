import Navigation from '@/components/navigation/Navigation';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import useUIConfig from '@/hooks/useUIConfig';
import useSearch from '@/hooks/useSearch';
import SpaceShip from '@/models/SpaceShip';

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

  // takes care of page transitions for dynamic page
  const isShipRoute = pathname.startsWith('/ships/') && prevPath.startsWith('/ships/');
  const key = isShipRoute ? 'ships' : pathname;

  // takes care of metadata for dynamic page
  const shipId = pathname.startsWith('/ships/') ? pathname.slice(7) : '';
  const { item } = useSearch({
    search: { id: shipId, withParams: false },
    reducer: 'items',
    sliceKey: 'ships',
  });
  const ship = item as SpaceShip;

  // set metadata either as dynamic ship data || static page data from object
  const { title, description } = ship
  ? { title: ship.model, description: ship.desc }
  : metadata[pathname as keyof typeof metadata] || metadata['*'];

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
