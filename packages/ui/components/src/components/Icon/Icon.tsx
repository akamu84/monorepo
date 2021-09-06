import React, { FC } from 'react';
import cn from 'classnames';
import SJIcons from './selection.json';
import { IIconProps, IGroupedIconProps } from './Icon.types';
import styles from './Icon.module.scss';

const XMLNS = 'http://www.w3.org/2000/svg';

const GroupedIcon: FC<IGroupedIconProps> = ({ color, name = [], translateProp }) => (
  <g xmlns={XMLNS} transform={`translate(0, ${translateProp}) scale(0.100000,-0.100000)`} fill={color} stroke="none">
    {name.map((n) => (
      <path key={`${n.slice(0, 5)} ${translateProp}`} d={n} />
    ))}
  </g>
);

const Icon: React.FC<IIconProps> = ({ className, color, height, name, size = 16, viewBox = '0 0 50 50', width }) => {
  const translateProp = viewBox.split(' ')[3];
  const getIcon = SJIcons[name];

  return (
    <svg
      data-testid="Icon"
      className={cn(className, styles.container)}
      height={height ?? size}
      viewBox={viewBox}
      width={width ?? size}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>{name}</title>
      {Array.isArray(getIcon) ? (
        <GroupedIcon {...{ color, name: getIcon, translateProp }} />
      ) : (
        <path fill={color} d={getIcon} />
      )}
    </svg>
  );
};

export default Icon;
