import { motion } from 'framer-motion';

interface ListProps<T> {
  items: T[]; // expect an array of TYPES (all of them must match)
  keyFn: (item: T) => string | number; // RENDER PROP: extract key and pass it back
  className: string; // all styling will be provided by the parent, this FC is not styled
  children: (item: T) => JSX.Element; // RENDER PROP: need to pass extracted object to parent
}

export default function List<T>({ items, keyFn, className, children }: ListProps<T>) {
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
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 1.2 },
          }} // delay * index adds stagger, other transitions can be configured by parent
          transition={{ type: 'tween', duration: 0.5, delay: index * 0.1 }}
        >
          {children(item)}
        </motion.li>
      ))}
    </motion.ul>
  );
}
