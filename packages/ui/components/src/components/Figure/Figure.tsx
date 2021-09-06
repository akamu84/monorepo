import React from 'react';
import cn from 'classnames';
import { IFigureProps } from './Figure.types';
import styles from './Figure.module.scss';

const Figure: React.FC<IFigureProps> = ({ alt, children, src, isRound, size, ...props }) => (
  <figure data-testid="Figure" className={cn('image', size)}>
    <img {...props} src={src} alt={alt} className={cn({ 'is-rounded': isRound })} />
    {children && <figcaption className={styles.caption}>{children}</figcaption>}
  </figure>
);
export default Figure;
