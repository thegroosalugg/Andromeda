import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Import IconProp type
import { motion } from 'framer-motion';

library.add(fab, fas);

interface IconProps {
  text?: string | number;
  icon: IconProp; // Change icon type to IconProp
  className?: string;
}

export default function FontAwesome({ text, icon, className }: IconProps) {
  return (
    // No default styles applied. Add your own by assigning a class to the container or the descendant <p> element
    <motion.span
      className={className}
      variants={{
        hidden: { opacity: 0, translateY: 100, scale: 0 },
        visible: { opacity: 1, translateY: 0, scale: 1 },
      }}
      transition={{ type: 'linear', duration: 0.5 }}
    >
      <FontAwesomeIcon icon={icon} />
      {text && <p>{text}</p>}
    </motion.span>
  );
}
