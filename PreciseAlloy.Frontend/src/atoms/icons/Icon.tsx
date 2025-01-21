import { getModifiers } from '@helpers/functions';
import { IconModel } from '@_types/types';

const Icon = (model: IconModel) => {
  const { height, iconPath, viewBoxHeight, viewBoxWidth, width, attrs, className } = model;
  const styleModifiers = getModifiers(model, 'zzz-a-icon');
  const href = iconPath.startsWith('#') ? '/assets/images/icons.svg' + iconPath : iconPath;

  return (
    <svg
      className={`${styleModifiers} ${className ? className : ''}`}
      aria-hidden="true"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      width={width || viewBoxWidth}
      height={height || viewBoxHeight}
      {...attrs}
    >
      <use xlinkHref={href}></use>
    </svg>
  );
};

export { Icon };
export default Icon;
