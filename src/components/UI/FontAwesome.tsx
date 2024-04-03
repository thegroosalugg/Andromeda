import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Import IconProp type
import { motion } from 'framer-motion';

library.add(fab, fas);

interface IconProps {
  text: string | number;
  icon: IconProp; // Change icon type to IconProp
  className: string;
}

export default function FontAwesome({ text, icon, className }: IconProps) {
  return (
    // No default styles applied. Add your own by assigning a class to the container or the descendant <p> element
    <motion.span
      className={className}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ type: 'linear', duration: 0.3 }}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </motion.span>
  );
}
