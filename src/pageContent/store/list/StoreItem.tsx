import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import CartButtons from './CartButtons';
import Clothes from '@/models/Clothes';
import css from './StoreItem.module.css';
import svgJacket from '@/assets/svg/jacket.svg';
import svgCoat from '@/assets/svg/coat.svg';
import svgVarsity from '@/assets/svg/varsity.svg';
import svgTracksuit from '@/assets/svg/tracksuit.svg';

const icons = {
  coat: svgCoat,
  varsity: svgVarsity,
  jacket: svgJacket,
  tracksuit: svgTracksuit,
};

interface StoreProps {
  item: Clothes;
  clickHandler: () => void;
  activeId: string | undefined;
}

export default function StoreItem({ item, clickHandler, activeId }: StoreProps) {
  const { id, name, brand, image, price, type } = item;
  const isActive = activeId === id;
  const scrollRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (isActive && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isActive]);

  return (
    <motion.li
      ref={scrollRef}
      className={`${css.item} ${isActive ? css.expanded : ''}`}
      layout
      variants={{
        hidden: { scale: 0.5, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
      }}
    >
      <img src={image} className={css['item-img']} alt='clothes item' onClick={clickHandler} />
      {isActive && (
        <div className={css['expanded-content']}>
          <h3 style={{ marginBottom: '0.2rem' }}>header</h3>
          <p>{"I'm waiting for a bus ".repeat(18)}</p>
          <h3 style={{ marginTop: '0.2rem' }}>footer</h3>
        </div>
      )}
      <div className={`${css.details} ${isActive ? css['details-expanded'] : ''}`}>
        <h4>{brand}</h4>
        <h5>{name}</h5>
        {isActive && <img src={icons[type as keyof typeof icons]} alt='clothes' />}
        <h3>${price}</h3>
        {isActive && <CartButtons item={item} />}
      </div>
      {isActive && <div className={css.triangle} />}
    </motion.li>
  );
}
