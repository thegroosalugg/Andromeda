import { motion } from 'framer-motion';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Import IconProp type
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      transition={{ staggerChildren: 0.2, delayChildren: 1.5 }}
    >
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: [1.2, 1] },
          }}
          transition={{ type: 'spring' }}
        >
          <FontAwesomeIcon icon={icon} />
          {texts && <span>{texts[index]}</span>}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default IconRow;
