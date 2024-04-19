import { motion } from 'framer-motion';

interface ListProps<T> {
  items: T[];                            // expect an array of TYPES (all of them must match)
  keyFn: (item: T) => string | number;   // RENDER PROP: extract key and pass it back
  className: string;                     // all styling will be provided by the parent, this FC is not styled
  children: (item: T) => JSX.Element;    // RENDER PROP: need to pass extracted object to parent
  // configure framer motion
  liVariants?:  { visible: object; hidden: object };
  liTransition?: object;
}

export default function List<T>({
  items,
  keyFn,
  className,
  children,
  liVariants,
  liTransition,
}: ListProps<T>) {
  return (
    <motion.ul
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.li
          key={keyFn(item)}
          variants={liVariants} // delay * index adds stagger, other transitions can be configured by parent
          transition={{...liTransition, delay: index * 0.1}}
        >
          {children(item)}
        </motion.li>
      ))}
    </motion.ul>
  );
}
