import { motion } from 'framer-motion';

interface ListProps<T> {
  items: T[];                            // expect an array of TYPES (all of them must match)
  keyFn: (item: T) => string | number;   // RENDER PROP: extract key and pass it back
  className: string;                     // all styling will be provided by the parent, this FC is not styled
  children: (item: T) => JSX.Element;    // RENDER PROP: need to pass extracted object to parent
}

export default function List<T>({ items, keyFn, className, children }: ListProps<T>) {
  return (
    <motion.ul
      className={className}
      variants={{
        visible: { opacity: 1 },
        hidden:  { opacity: 0 },
      }}
      initial='hidden'
      animate='visible'
    >
      {items.map((item, index) => (
        <motion.li
          key={keyFn(item)}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden:  { opacity: 0, scale: 1.2 },
          }}
          transition={{ type: 'tween', duration: 0.5, delay: index * 0.1 }}
        >
          {children(item)}
        </motion.li>
      ))}
    </motion.ul>
  );
}
