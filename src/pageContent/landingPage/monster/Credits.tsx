import List from '@/components/list/List';
import freepik from '@/assets/credits/Freepik.png';
import svgrepo from '@/assets/credits/svgrepo.png';
import PNGwing from '@/assets/credits/PNGwing.png';
import cleanpng from '@/assets/credits/cleanpng.png';
import rawpixel from '@/assets/credits/rawpixel.png';
import wallpapers from '@/assets/credits/wallpaperscom.png';
import silhouttes from '@/assets/credits/silhouettesfree.png';
import css from './Credits.module.css';

export default function Credits() {
  // prettier-ignore
  const images = [
    { img:    freepik, link: 'https://www.freepik.com/' },
    { img:    svgrepo, link: 'https://www.svgrepo.com/' },
    { img:    PNGwing, link: 'https://www.pngwing.com/' },
    { img:   cleanpng, link: 'https://www.cleanpng.com/' },
    { img:   rawpixel, link: 'https://www.rawpixel.com/' },
    { img: wallpapers, link: 'https://www.wallpapers.com/' },
    { img: silhouttes, link: 'https://www.silhouettesfree.com/' },
  ];

  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className={css.credits}>
      <h2>Images brought to you by</h2>
      <List items={images} className={css.grid} keyFn={({ link }) => link}>
        {({ img, link }) => (
          <div className={css.frame}>
            <img src={img} alt='logo' onClick={() => openLink(link)} />
          </div>
        )}
      </List>
    </div>
  );
}
