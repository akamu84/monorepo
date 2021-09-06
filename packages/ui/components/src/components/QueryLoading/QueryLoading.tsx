import React from 'react';
import cn from 'classnames';
import { IQueryLoadingProps } from './QueryLoading.types';
import styles from './QueryLoading.module.scss';

const QueryLoading: React.FC<IQueryLoadingProps> = ({ className, inverted = false, label }) => {
  const invertedClass = cn({
    [styles.inverted]: inverted,
  });

  return (
    <div data-testid="QueryLoading" className={cn(className, styles.container, invertedClass)}>
      <div className={cn(styles.loadingSpinner)} />
      {label && <span className={cn(styles.loadingLabel)}>{label}</span>}
    </div>
  );
};

export default QueryLoading;
