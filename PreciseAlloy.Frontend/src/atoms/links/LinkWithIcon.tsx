import Icon from '@atoms/icons/Icon';
import { getModifiers } from '@helpers/functions';
import { LinkWithIconModel } from '@_types/types';

const LinkWithIcon = (model: LinkWithIconModel) => {
  const styleModifiers = getModifiers(model, 'zzz-a-link-with-icon');
  const { url, leadingIcon, trailingIcon, target, text, ariaLabel } = model;

  return (
    <a className={styleModifiers} href={url} target={target} aria-label={ariaLabel}>
      {leadingIcon && <Icon {...leadingIcon} />} {text && <span>{text}</span>} {trailingIcon && <Icon {...trailingIcon} />}
    </a>
  );
};

export { LinkWithIcon };
export default LinkWithIcon;
