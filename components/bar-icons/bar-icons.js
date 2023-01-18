import { useState } from 'react';
import Link from 'next/link';

import styles from '../../styles/bar-icons.module.css';
import IconFacebook from '../icons/icon-facebook';
import IconPinterest from '../icons/icon-pinterest';
import IconInstagram from '../icons/icon-instagram';

function BarIcons() {
  const [hover, setHover] = useState(0);
  return (
    <div className={styles.container}>
      <Link href='https://www.facebook.com/' target='_blank'>
        <div
          className={styles.iconWrapper}
          onMouseOver={() => setHover(1)}
          onMouseLeave={() => setHover(0)}
        >
          <IconFacebook color={hover === 1 && '#fb5d85'} />
        </div>
      </Link>
      <Link href='https://www.pinterest.com/' target='_blank'>
        <div
          className={styles.iconWrapper}
          onMouseOver={() => setHover(2)}
          onMouseLeave={() => setHover(0)}
        >
          <IconPinterest color={hover === 2 && '#fb5d85'} />
        </div>
      </Link>
      <Link href='https://www.instagram.com/' target='_blank'>
        <div
          className={styles.iconWrapper}
          onMouseOver={() => setHover(3)}
          onMouseLeave={() => setHover(0)}
        >
          <IconInstagram color={hover === 3 && '#fb5d85'} />
        </div>
      </Link>
    </div>
  );
}

export default BarIcons;
