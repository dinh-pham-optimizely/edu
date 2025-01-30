import RequireCss from '@helpers/RequireCss';
import { FooterModel } from '@_types/types';
import { getModifiers } from '@helpers/functions';
import Picture from '@atoms/pictures/Picture';
import LinkWithIcon from '@atoms/links/LinkWithIcon';
import { Link } from '@atoms/links/Link';

const Footer = (model: FooterModel) => {
  const styleModifier = getModifiers(model, 'zzz-o-footer');
  const { copyRight, logo, description, contacts, pages, privacyLinks, socialNetworks } = model;

  return (
    <footer className={styleModifier}>
      <div className="zzz-o-footer__top-section">
        <div className="zzz-o-footer__info">
          <div className="zzz-o-footer__logo">{logo && <Picture {...logo} />}</div>
          {description && <p className="zzz-o-footer__description">{description}</p>}
          {contacts && (
            <div className="zzz-o-footer__contacts">
              {contacts.map((contact, index) => (
                <LinkWithIcon key={index} {...contact} />
              ))}
            </div>
          )}
        </div>
        {pages && (
          <div className="zzz-o-footer__pages">
            {pages.map((page, i) => (
              <div key={i} className="zzz-o-footer__pages-item">
                <p className="zzz-o-footer__pages-title">{page.title}</p>
                {page.links && (
                  <div className="zzz-o-footer__pages-links">
                    {page.links.map((link, j) => (
                      <Link key={j} {...link} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="zzz-o-footer__bottom-section">
        {privacyLinks && (
          <div className="zzz-o-footer__privacy-links">
            {privacyLinks.map((privacyLink, index) => (
              <Link key={index} {...privacyLink} />
            ))}
          </div>
        )}
        {socialNetworks && (
          <div className="zzz-o-footer__social-networks">
            {socialNetworks.map((socialNetwork, index) => (
              <LinkWithIcon key={index} {...socialNetwork} />
            ))}
          </div>
        )}
      </div>
      <p className="zzz-o-footer__copy-right">{copyRight}</p>

      <RequireCss path={'b-footer'} />
    </footer>
  );
};

export default Footer;
