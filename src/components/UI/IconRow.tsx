import FontMotion from './FontMotion';
import { motion } from 'framer-motion';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Import IconProp type

interface IconProps {
  icons: IconProp[]; // 3D array specifies icon library 'fas/fab/far/etc' and icon name
  texts?: string[]; // provide text for icons if required
  className: string;
}

const IconRow: React.FC<IconProps> = ({ icons, texts, className }) => {
  return (
    <motion.div
      className={className}
      initial='hidden' // no animations here. Calls on child variants to activate staggerChildren
      animate='visible'
      transition={{ staggerChildren: 0.2 }}
    >
      {icons.map((icon, index) => (
        <FontMotion key={index} icon={icon} text={texts && texts[index]} />
      ))}
    </motion.div>
  );
};

export default IconRow;
