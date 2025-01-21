import {LinkModel} from "@_types/atoms";
import {getModifiers} from "@helpers/functions";

const Link = (model: LinkModel) => {
  const styleModifiers = getModifiers(model, 'zzz-a-link');

  const {url, text, attrs, target, ariaLabel, active} = model;

  return <a className={`${styleModifiers} ${active ? 'zzz-a-link--active' : ''}`} href={url} target={target} aria-label={ariaLabel} {...attrs}>
   {text && <span>{text}</span>}
  </a>
};

export {Link}
