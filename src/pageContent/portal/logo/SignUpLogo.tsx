import { motion } from 'framer-motion';

export default function SignUpLogo() {
  return (
    <motion.img
      src='/logo.jpg'
      alt='signup'
      style={{ width: '300px', display: 'block', borderRadius: '50%', margin: '5rem auto 1rem' }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { type: 'easeIn', duration: 0.4 } }}
      whileHover={{
        scale: [1, 1.1, 1],
        filter: [
          'blur(0px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))',
          'blur(5px) drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.5))',
          'blur(0px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))',
        ],
        transition: {
          duration: 3,
          ease: 'linear',
          repeat: Infinity,
        },
      }}
    />
  );
}
