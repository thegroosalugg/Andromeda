import Form from '@/components/form/Form';
import SignUpLogo from '@/pageContent/portal/logo/SignUpLogo';
import UserPortal from '@/pageContent/portal/main/UserPortal';
import { RootState } from '@/store/types';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export default function UserPage() {
  const { user } = useSelector((state: RootState) => state.users);

  let page;

  if (user) {
    page = <UserPortal {...user} />;
  } else {
    page = (
      <>
        <SignUpLogo />
        <Form />
      </>
    );
  }

  return (
    <AnimatePresence mode='popLayout'>
      <motion.section
        key={user as null}
        exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
        style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
      >
        {page}
      </motion.section>
    </AnimatePresence>
  );
}
