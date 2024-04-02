import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from "@fortawesome/fontawesome-svg-core"; // Import IconProp type

library.add(fab, fas)

interface IconProps {
  text: string | number;
  icon: IconProp; // Change icon type to IconProp
  className: string;
}

export default function FontAwesome({ text, icon, className }: IconProps) {
  return (
    // No default styles applied. Add your own by assigning a class to the container or the descendant <p> element
    <span className={className}>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </span>
  );
}
