import { motion, MotionProps } from 'framer-motion';
import { HTMLAttributes } from 'react';

type Motion = typeof motion & {
  [K in keyof JSX.IntrinsicElements]: string;
};

// possible elements limited to this scope. Any not in this list will default to 'div'
const validHTMLTags = new Set([
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'span', 'article', 'input', 'form', 'label', 'textarea', 'header', 'section'
]);

// extends motion props as HTML react props so {...props} can be passed
interface DivProps extends Omit<MotionProps, keyof HTMLAttributes<HTMLElement>> {
  element?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

// not suitabe as a child if parent has staggerChildren
const MotionDiv: React.FC<DivProps> = ({
  element='div',
  className,
  children,
  ...props
}: DivProps) => {
  const m = motion as Motion; // TS type assertion to treat 'motion' object as type declared with 'type Motion'
  const Element = m[validHTMLTags.has(element) ? element : 'div'];

  return (
    <Element
      className={className}
      {...props}
    >
      {children}
    </Element>
  );
};

export default MotionDiv;
