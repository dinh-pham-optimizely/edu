import { viteAbsoluteUrl } from "./functions";

interface Props {
  path: string;
  rel?: 'stylesheet' | 'modulepreload';
}

const RequireCss = ({ path, rel }: Props) => {
  const normalizedPath = /^https?:\/\//gi.test(path)
    ? path
    : path.startsWith('vendors/')
      ? viteAbsoluteUrl('/assets/' + path + '.css')
      : viteAbsoluteUrl('/assets/css/' + path + '.css');

  return <link rel={rel ?? 'stylesheet preload'} href={normalizedPath} data-pl-require as="style" />;
};

export { RequireCss };
export default RequireCss;
