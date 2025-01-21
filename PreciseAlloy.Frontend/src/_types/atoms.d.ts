import { BasedAtomicModel } from './_general';

export interface ButtonModel extends BasedAtomicModel {
  disabled?: boolean;
  href?: string;
  link?: boolean;
  styleModifier?: ('btn' | 'btn-black')[];
  text: string;
  type?: 'button' | 'submit';
  target?: string;
}

export interface PictureModel extends BasedAtomicModel {
  sources?: {
    media?: string;
    srcSet?: string;
  }[];
  src: string;
  alt?: string;
  lazy?: boolean;
  width?: string;
  height?: string;
}

export interface IconModel extends BasedAtomicModel {
  iconPath: string;
  viewBoxWidth: number;
  viewBoxHeight: number;
  width?: number;
  height?: number;
}

export interface LinkWithIconModel extends BasedAtomicModel {
  url: string;
  trailingIcon?: IconModel;
  leadingIcon?: IconModel;
  target?: string;
  ariaLabel?: string;
  text?: string;
}

export interface TextInputModel extends BasedAtomicModel {
  id?: string;
  name?: string;
  label?: string;
  placeHolder?: string;
  required?: boolean;
  requiredMessage?: string;
  type?: 'text' | 'email' | 'password';
}

export interface TextareaModel extends BasedAtomicModel {
  id?: string;
  name?: string;
  label?: string;
  placeHolder?: string;
  required?: boolean;
  requiredMessage?: string;
}

export interface ErrorMessageModel extends BasedAtomicModel {
  error?: string;
}

export interface LinkModel extends BasedAtomicModel {
  url: string;
  text: string;
  disabled?: boolean;
  active?: boolean;
  target?: string;
  ariaLabel?: string;
}
