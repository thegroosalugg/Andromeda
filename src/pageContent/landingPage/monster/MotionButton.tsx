import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const MotionButton: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <motion.button
      {...props}
      whileHover={{ scale: 1.2, color: '#FFFFFF', textShadow: '2px 2px 4px #4B0082' }}
      animate={{
        color: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'],
        transition: { duration: 2, repeat: Infinity },
      }}
    >
      {text}
    </motion.button>
  );
};

export default MotionButton;
