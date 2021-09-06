import React from 'react';
import cn from 'classnames';
import Figure from '../Figure';
import { ICardProps } from './Card.types';
import styles from './Card.module.scss';

const Card: React.FC<ICardProps> = ({ className, image, title, children }) => (
  <div data-testid="Card" className={cn('card', styles.card, className)}>
    {title && (
      <header className="card-header">
        <p className="card-header-title" data-testid="cardTitle">
          {title}
        </p>
      </header>
    )}
    {image && (
      <div className="card-image">
        <Figure src={image.src} alt={image.alt} data-testid="cardImage" size={image.size} />
      </div>
    )}
    {children && (
      <div className="card-content" data-testid="cardContent">
        <div className="content">{children}</div>
      </div>
    )}
  </div>
);

export default Card;
