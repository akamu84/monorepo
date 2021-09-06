import React, { Suspense, Children } from 'react';
import cn from 'classnames';
import Icon from '../Icon';
import QueryLoading from '../QueryLoading';
import { getIconSize } from '../../utils/utils';
import { IButtonProps } from './Button.types';
import styles from './Button.module.scss';

const Button: React.FC<IButtonProps> = ({
  buttonColor,
  buttonSize = 'large',
  children,
  className,
  disabled,
  iconProps,
  isfullWidth,
  label,
  loading,
  selected,
  type = 'button',
  variant,
}) => {
  const isTertiary = variant === 'tertiary';
  const buttonVariantStyles = {
    [styles.primaryButton]: variant === 'primary' || selected,
    [styles.secondaryButton]: variant === 'secondary',
    [styles.tertiaryButton]: isTertiary,
    [styles.textButton]: variant === 'text',
  };
  const iconSize = getIconSize(buttonSize);
  const hasChildren = Boolean(Children.count(children));

  const buttonStyles = cn(
    'button',
    className,
    styles.container,
    buttonVariantStyles,
    styles[buttonColor ?? ''],
    styles[buttonSize],
    styles[iconProps ? iconProps.position : ''],
    {
      'is-fullwidth': isfullWidth,
      'is-loading': loading,
    }
  );

  return (
    <button data-testid="Button" type={type} className={buttonStyles} disabled={disabled}>
      {(iconProps || isTertiary) && (
        <span className={styles.icon}>
          <Suspense fallback={<QueryLoading />}>
            <Icon
              name={iconProps?.name}
              size={iconProps?.size ?? iconSize}
              viewBox={iconProps?.viewBox}
              color={iconProps?.color}
            />
          </Suspense>
        </span>
      )}
      {label && <span className={styles.label}>{label}</span>}
      {hasChildren && <span className={styles.label}>{children}</span>}
    </button>
  );
};

export default Button;
