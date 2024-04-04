import { motion } from 'framer-motion';

// create new Type, using typeof all keys & methods of the motion object. & combines multiple types into one
type Motion = typeof motion & {
  // This is a mapped type that iterates over each key (K) in keyof JSX.IntrinsicElements
  // It epresents the default HTML elements available in JSX. For each key in JSX.IntrinsicElements, the mapped type assigns the type string
  [K in keyof JSX.IntrinsicElements]: string; // creates a new type where each key from JSX.IntrinsicElements maps to a string type
};

// possible elements limited to this scope. Any not in this list will default to 'div'
const validHTMLTags = new Set([
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'span', 'div', 'article', 'input', 'form', 'label', 'textarea', 'section'
]);

interface DivProps {
  element: keyof JSX.IntrinsicElements;
  className?: string;
  variants?: {
    hidden?: object;
    visible?: object;
    exit?: object;
  };
  transition?: object;
  children: React.ReactNode;
}

// not suitabe as a child if parent has staggerChildren
const MotionDiv: React.FC<DivProps> = ({
  element,
  className,
  variants,
  transition,
  children,
}: DivProps) => {
  const m = motion as Motion; // TS type assertion to treat 'motion' object as type declared with 'type Motion'
  const Element = m[validHTMLTags.has(element) ? element : 'div'];

  return (
    <Element
      className={className}
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='exit'
      transition={transition}
    >
      {children}
    </Element>
  );
};

export default MotionDiv;
