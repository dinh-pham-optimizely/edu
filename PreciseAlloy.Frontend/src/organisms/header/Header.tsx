import RequireJs from '@helpers/RequireJs';
import RequireCss from '@helpers/RequireCss';
import { HeaderModel } from '@_types/types';
import { getModifiers } from '@helpers/functions';
import LinkWithIcon from "@atoms/links/LinkWithIcon";
import Picture from "@atoms/pictures/Picture";
import {Link} from "@atoms/links/Link";
import Icon from "@atoms/icons/Icon";

const Header = (model: HeaderModel) => {
  const styleModifiers = getModifiers(model, 'zzz-o-header');
  const {topBar, logo, links, hamburgerIcon} = model;

  return (
    <div className={styleModifiers}>
      {topBar && <div className="zzz-o-header__top-bar">
        <LinkWithIcon {...topBar} />
      </div>}

      <div className="zzz-o-header__content">
        {logo &&<div className="zzz-o-header__logo-container"><Picture {...logo} className="zzz-o-header__logo" /></div>}

        {links && <ul className="zzz-o-header__links zzz-o-header__desktop-links">
          {links.map((link, index) => <li key={index}>
            <Link {...link} />
          </li>)}
        </ul>}

        {hamburgerIcon && <div className="zzz-o-header__hamburger-icon"><Icon {...hamburgerIcon} /></div>}
      </div>

      <RequireJs path={'header'} defer/>
      <RequireCss path={'b-header'} />
    </div>
  );
}

export default Header;
