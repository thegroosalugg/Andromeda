import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'; // import brand icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // import solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; // import regular icons
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Import IconProp type
import { motion } from 'framer-motion';

library.add(fab, fas, far);

interface IconProps {
  text?: string | number;
  icon: IconProp; // Change icon type to IconProp
}

export default function FontMotion({ text, icon }: IconProps) {
  return (
    // No default styling. Select parent class or descendant <p> element then add your own style
    <motion.span
      variants={{
        hidden: { opacity: 0, translateY: '-100px', scale: 0 },
        visible: { opacity: 1, translateY: 0, scale: 1 },
      }}
      transition={{ type: 'linear', duration: 0.5 }}
    >
      <FontAwesomeIcon icon={icon} />
      {text && <p>{text}</p>}
    </motion.span>
  );
}
